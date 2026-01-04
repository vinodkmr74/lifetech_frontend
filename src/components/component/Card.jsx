import React from 'react'

export default function Card({children , className="" }) {
  return (
    <div className={`w-[90%] md:w-[500px] lg:w-[400px] m-4 p-4  border border-gray-400  rounded-md ${className}`}>   
    {children }   
    </div>
  )
}
