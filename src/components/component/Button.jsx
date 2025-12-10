import React from 'react'

export default function Button({label }) {
  return (
    <div>
    <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md"> {label}</button>
    </div>
  )
}
