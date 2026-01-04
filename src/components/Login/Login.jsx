import { useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import InputBox from "../component/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../utils/apiConstants";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
      return;
    }

    try {
      // =====================
      // STEP 1: LOGIN
      // =====================
      const payload = new FormData();
      payload.append("email", formData.email);
      payload.append("password", formData.password);

      const loginRes = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        body: payload,
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok) {
        toast.error(loginData.detail || "Invalid email or password");
        return;
      }

      // =====================
      // STEP 2: TOKEN GENERATE
      // =====================
      const tokenRes = await fetch(`${API_BASE_URL}/api/token_generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: formData.email, // IMPORTANT: email → username
          password: formData.password,
        }),
      });

      const tokenData = await tokenRes.json();

      if (!tokenRes.ok) {
        toast.error("Token generation failed");
        return;
      }

      // =====================
      // STEP 3: SAVE & REDIRECT
      // =====================
      localStorage.setItem("token", tokenData.access_token);
      localStorage.setItem("user", JSON.stringify(loginData.user));

      toast.success("Login successful");
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="bg-[url('/image/login_page.jpg')] bg-cover bg-center bg-no-repeat bg-fixed h-screen w-full">
      <div className="p-2">
        <Card>
          <div className="flex flex-col border-b border-gray-500 gap-4 mb-4">
            <img className="h-12 w-48 rounded" src="/image/hospital.png" />
            <p className="font-bold text-[24px]">Login to Dashboard</p>
            <p>Fill the below form to login to your dashboard</p>
          </div>

          <form onSubmit={handleSubmit}>
            <InputBox
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <InputBox
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />

            <Button
              label="Login"
              type="submit"
              disabled={!formData.email || !formData.password}
            />
          </form>
        </Card>
      </div>

      <div className="p-2">
        <Card className="border-none shadow-none">
          <p className="text-center font-medium">
            Forgot Password?
            <Link to="/forgot" className="hover:underline text-blue-600">
              {" "}
              Reset
            </Link>
          </p>

          <div className="flex justify-between w-full text-md mt-4">
            <p className="cursor-pointer hover:underline text-blue-500">
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p className="cursor-pointer hover:underline text-blue-600">
              <Link to="/terms">Terms & Conditions</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
