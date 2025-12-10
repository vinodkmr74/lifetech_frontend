import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign_in from './src/components/Login/Login'
import Dashboard from './src/components/Dashboard/Dashboard'
import Appointments from './src/components/application/Appointments'
import Login from './src/components/Login/Login'

export default function router() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>

            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/appointments' element={<Appointments />}></Route>
        </Routes>
      
    </div>
  )
}
