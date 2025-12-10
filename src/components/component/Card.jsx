import React from 'react'

export default function Card({children }) {
  return (
    <div className='w-[30%] border border-gray-400 p-4 rounded-md absolute top-[100px] left-[100px]'>   
    {children }   
    </div>
  )
}
