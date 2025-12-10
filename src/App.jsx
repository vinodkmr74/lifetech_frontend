import React from 'react'
import { Link } from 'react-router-dom'
import Router from '../router.jsx'
import { MdDashboard } from "react-icons/md";

import { FaCalendarCheck } from "react-icons/fa";


export default function App() {
  return (
    <>
      <div className="flex w-full ">

        

        <div className="w-[20%] h-[130vh] p-4 bg-[#c5cbcd]">



            <div className="flex items-center hover:bg-[#3babc2] p-2 gap-2 font-bold">
            <FaCalendarCheck />
            <Link to="/">
              login
            </Link>
          </div>


          <div className="flex items-center hover:bg-[#3babc2] p-2 gap-2 font-bold">
            <MdDashboard />
            <Link to="/dashboard">Dashboard </Link>
          </div>


          {/* 
          <Link to="/signin" className="block mb-2  hover:underline">
            Sign Up
          </Link> */}

          <div className="flex items-center hover:bg-[#3babc2] p-2 gap-2 font-bold">
            <FaCalendarCheck />
            <Link to="/appointments">
              Appointments
            </Link>
          </div>
        </div>

        <div className='w-full'> <Router /></div>
      </div>



    </>
  )
}
