import React from "react";

export default function InputBox({ label, type = "text", name, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col w-full mb-4">
      {label && <label className="mb-2 text-sm font-bold text-gray-1000">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-500 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-black"
      />
    </div>
  );
}
