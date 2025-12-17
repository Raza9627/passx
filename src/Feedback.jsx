import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useState } from "react";
import toast from 'react-hot-toast';
import  { Toaster } from "react-hot-toast";

function Feedback() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // later you can connect API / backend
    toast.success("Thanks for your Feedback")
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Toaster position='top-center'/>
    <Navbar/>
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-2">
          Feedback
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Your feedback helps make <span className="text-green-500 font-semibold">PassX</span> better 🚀
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Feedback
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your feedback here..."
              rows="4"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-xl hover:bg-green-600 transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
   <Footer/>
   </>
  )
}

export default Feedback