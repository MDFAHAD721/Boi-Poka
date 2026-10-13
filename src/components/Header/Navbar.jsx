import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/" className="m-2 border px-4 py-2 rounded-lg text-[#23BE0A]">
        Home
      </Link>
      <Link
        to="/about"
        className="m-2 border px-4 py-2 rounded-lg text-[#23BE0A]"
      >
        About
      </Link>
      <a className="m-2 border px-4 py-2 rounded-lg text-[#23BE0A]">
        Listed Books
      </a>
      <a className="m-2 border px-4 py-2 rounded-lg text-[#23BE0A]">
        Pages to Read
      </a>
    </>
  );
  return (
    <div className="navbar bg-base-100 md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">{links}</div>
      <div className="navbar-end">
        <a className="btn mr-2 bg-[#23BE0A] text-white rounded-lg">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
