import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const nevigate = useNavigate();
  const {pathname} = useLocation();
    return (
    <header className="p-4 bg-cyan-950 text-white">
      <div className="container flex justify-between h-16 mx-auto">
        <h2 to="/" className="text-2xl font-bold flex items-center">
          AppStore
        </h2>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink to={"/"} className="flex items-center px-4 -mb-1">
              Apps
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/Profile"} className="flex items-center px-4 -mb-1">
              My Profile
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={"/ExtraPage"} className="flex items-center px-4 -mb-1">
              Extra
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button onClick={()=>nevigate("/Login")} className={`self-center px-8 py-3 font-semibold rounded ${pathname == "/Login" ? "text-pink-500" : ""}`}>
            Log in
          </button>
          <button onClick={()=>nevigate("/Register")} className={`self-center px-8 py-3 font-semibold rounded ${pathname == "/Register" ? "text-pink-500" : ""}`}>
            Register
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
