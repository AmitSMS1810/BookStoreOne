import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import { FiX } from "react-icons/fi";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

function Navbar() {
  const { loginModal, setLoginModal,signupModal,setSignupModal  } = useAuth();
  console.log(loginModal)
  const navMenu = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4 md:px-20">

        {/* LEFT SIDE */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* menu icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
              {navMenu}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            📚 BookStore
          </Link>
        </div>

        {/* CENTER MENU (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end gap-2">

          {/* Search Box */}
          <div className="hidden md:flex items-center border rounded-lg px-2">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-sm border-none focus:outline-none"
            />

            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
            </svg>
          </div>

          {/* Login Button */}
          <button onClick={() => setLoginModal(true)} className="btn btn-primary btn-sm">Login</button>
        </div>

      </div>
      {loginModal &&
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-brightness-50">
          <div className="bg-white rounded-md shadow-md p-4 max-w-4xl">
            <div className="flex justify-end">
              <button
                onClick={()=>setLoginModal(false)}
                className=" text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <FiX size={24} />
              </button>
            </div>
            <Login/>
          </div>

        </div>
      }
      {/* signup modal */}
       {signupModal &&
        <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-brightness-50">
          <div className="bg-white rounded-md shadow-md p-4 max-w-4xl">
            <div className="flex justify-end">
              <button
                onClick={()=>setSignupModal(false)}
                className=" text-gray-600 hover:text-gray-800 cursor-pointer"
              >
                <FiX size={24} />
              </button>
            </div>
            <Signup/>
          </div>

        </div>
      }
    </>
  );
}

export default Navbar;