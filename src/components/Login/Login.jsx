import { useState } from "react";
import Button from "../component/Button";
import Card from "../component/Card";
import InputBox from "../component/InputBox";

export default function Login() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {

    const payload = new FormData()
    payload.append('email', formData.email);
    payload.append('password', formData.password);

    try {
      const response = await fetch('', {
        method: 'POST',
        body: payload
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="bg-[url('/image/closeup-doctor.jpg')] bg-cover bg-center bg-no-repeat bg-fixed h-screen w-full">



      <Card>

        <div className="flex flex-col border-b border-gray-500 gap-4">
          <img className="h-12 w-48 rounded" src="/image/hospital.png"></img>
          <p className="font-bold text-[24px]">Login to Dashboard</p>
          <p>Fill the below form to login to your dashboard</p>
        </div>
        <InputBox
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email required"
          />

        <InputBox
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password required" />

        <Button label="Login" onClick={handleSubmit} />
      </Card>


    </div>
  );
}
