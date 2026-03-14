import React, { useState } from "react";
import Swal from "sweetalert2";
import signup from "../assets/sign.avif";
import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "./AuthContext";

function Signup() {
  const { setSignupModal, setLoginModal } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post('http://localhost:8080/user/signup', formData);
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: response.data.message || "Signup successfully"
      });
      setFormData('');
      setSignupModal(false);
      setLoginModal(true);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: error.response?.data?.message || 'failed'
      });
      console.log('error', error)
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <div className=" overflow-hidden w-full grid md:grid-cols-2">

        {/* Left Form Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account 🚀
          </h2>
          <p className="text-gray-500 mb-6">
            Sign up to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full  text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full  text-gray-700 border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer`}
            >
              {loading ? 'Signin...' : 'Sign Up'}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-sm text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <span onClick={() => { setLoginModal(true), setSignupModal(false) }} className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block">
          <img
            src={signup}
            alt="signup"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;