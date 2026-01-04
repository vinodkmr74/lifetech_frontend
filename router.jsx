import { Routes, Route } from "react-router-dom";
import Login from "./src/components/Login/Login";
import Dashboard from "./src/components/Dashboard/Dashboard";
import Appointments from "./src/components/application/Appointments";
import ProtectedRoute from "./src/ProtectedRoute";
import RoleProtectedRoute from "./src/roles/RoleProtectedRoute";
import { ROLES } from "./src/roles/roles";
import AppLayout from "./src/components/AppLayout";
import Password_Reset from "./src/components/Login/Password_Reset";
import Privacy_Policy from "./src/components/Login/Privacy_Policy";
import Terms_Conditions from "./src/components/Login/Terms_Conditions";

export default function Router() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Password_Reset />} />
      <Route path="/privacy" element={<Privacy_Policy />} />
      <Route path="/terms" element={<Terms_Conditions />} />

      {/* COMMON (ADMIN + USER) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      {/* ADMIN ONLY */}
      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <RoleProtectedRoute allowedRoles={[ROLES.ADMIN]}>
              <AppLayout>
                <Appointments />
              </AppLayout>
            </RoleProtectedRoute>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
