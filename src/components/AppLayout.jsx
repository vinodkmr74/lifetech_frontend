import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";

export default function AppLayout({ children }) {
  // 🔹 USER DATA FROM LOCALSTORAGE
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex w-full">
      {/* SIDEBAR */}
      <div className="w-[20%] h-[120vh] p-4 bg-[#c5cbcd]">

        {/* COMMON (ADMIN + USER) */}
        <div className="flex items-center hover:bg-[#3babc2] p-2 gap-2 font-bold">
          <MdDashboard />
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* 🔐 ADMIN ONLY */}
        {user?.role === "admin" && (
          <div className="flex items-center hover:bg-[#3babc2] p-2 gap-2 font-bold">
            <FaCalendarCheck />
            <Link to="/appointments">Appointments</Link>
          </div>
        )}

      </div>

      {/* PAGE CONTENT */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
}
