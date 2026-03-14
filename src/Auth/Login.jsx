import React, { useState } from "react";
import login from "../assets/login.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const { setSignupModal, setLoginModal } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoading] = useState(false);

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
      const res = await axios.post("http://localhost:8080/user/login", formData);
      Swal.fire({
        icon: "success",
        title: "success",
        text: res.data.message || "success"
      });
      localStorage.setItem("user",JSON.stringify(res.data.user));
      setFormData('');
      setLoginModal(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "error",
        text: error.response?.data?.message || "Login failed"
      })
    }finally{
        setLoading(false)
      }
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" overflow-hidden w-full grid md:grid-cols-2">

        {/* Left Image Section */}
        <div className="hidden md:block">
          <img
            src={login}
            alt="login"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-700 mb-6">
            Please login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-2 focus:ring-0 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Password with Eye Icon */}
            <div>
              <label className="text-sm text-gray-800">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full text-gray-700 border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                {/* Eye Icon */}
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-800"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-gray-700 gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`w-full ${loading ? 'bg-blue-400' : 'bg-blue-600'} text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300`}
            >
              {loading ? 'Login...': 'Login'}
            </button>
          </form>

          {/* Signup Link */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <span onClick={() => { setSignupModal(true), setLoginModal(false) }} className="text-blue-600 cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;