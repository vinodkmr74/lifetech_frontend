import React, { useState } from "react";
import DashboardBox from "./DashboardBox";
import { IoSettingsOutline } from "react-icons/io5";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { FiUser } from "react-icons/fi";
import { TfiLock } from "react-icons/tfi";

export default function Dashboard() {
  const isAnimationActive = true;

  const data = [
    { name: "v1", p: 5000, pv: 400, t: 400 },
    { name: "v2", p: 200, pv: 500, t: 4005 },
    { name: "v3", p: 300, pv: 5400, t: 4003 },
    { name: "v4", p: 4000, pv: 6000, t: 4002 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[80px] bg-[#e9edf1] flex items-center">
        <IoSettingsOutline
          size={24}
          onClick={() => setOpen(!open)}
          className="mr-6 ml-auto cursor-pointer"
        />
      </div>
      {open && (
        <>
          {/* DARK OVERLAY */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* POPUP BOX (SCROLLS WITH PAGE) */}
          <div
            className="
             absolute z-50
             top-[60px]
            left-[30%]
             sm:left-[60%]
               md:left-[70%]
              lg:left-[80%]
               w-[225px]
                md:w-[240px]
                 lg:w-[250px]
                      p-0 
                     bg-white
                   rounded-lg
                 shadow-xl
                overflow-y-auto"
          >
            <div className="border-b border-gray-500 flex p-1 bg-green-200">
              <img
                className="h-16 w-16 p-2 rounded-full"
                src="/image/profile-user.jpg"
              ></img>
              <p className="p-4">Hello</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4 gap-2 flex">
                {" "}
                <FiUser />
                Profile
              </p>
              <p className="text-gray-700 mb-4 gap-2 flex">
                {" "}
                <TfiLock />
                Logout
              </p>
            </div>
          </div>
        </>
      )}

      <div className="">
        <div
          className="
          flex flex-wrap
          justify-center lg:justify-between
          gap-2
         bg-green-300
          w-full
          min-h-[210px] md:min-h-[200px] lg:min-h-[210px]
         p-4
         m-2
         rounded-lg
         "
        >
          <DashboardBox label="Dashboard" />
          <DashboardBox label="Dashboard" />
          <DashboardBox label="Dashboard" />
          <DashboardBox label="Dashboard" />
        </div>

        <div className="flex md:flex-row flex-col pt-0 w-full border  ">
          <div style={{ width: "100%", maxWidth: "700px" }}>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" /> {/* FIXED */}
                <YAxis />
                <Tooltip />
                <Legend />
                {/* REMOVED isAnimationActive (it was undefined) */}
                <Bar dataKey="p" fill="#0db9cfff" />
                <Bar dataKey="pv" fill="#3f42d1ff" />
                <Bar dataKey="t" fill="#ade021ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full pt-0">
            <ResponsiveContainer width="100%" height={380}>
              <PieChart margin={{ top: 30, right: 40, bottom: 90, left: 60 }}>
                {/* First Pie */}
                <Pie
                  data={data}
                  dataKey="p"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="50%"
                  fill="#d43317ff"
                  isAnimationActive={isAnimationActive}
                />

                {/* Second Pie */}
                <Pie
                  data={data}
                  dataKey="pv"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="55%"
                  outerRadius="75%"
                  fill="#0de660ff"
                  label
                  isAnimationActive={isAnimationActive}
                />

                {/* Third Pie */}
                <Pie
                  data={data}
                  dataKey="t"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="80%"
                  outerRadius="100%"
                  fill="#1339e4ff"
                  label
                  isAnimationActive={isAnimationActive}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
