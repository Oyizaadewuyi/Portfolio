import React from "react";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false); // Track menu state

  return (
    <nav className="bg-cyan-900 text-white fixed w-full z-10">
      <div className="flex justify-between items-center px-6 py-4">
         <h1 className="text-3xl font-signature text-gray-200" >RAY</h1>

        {/* Hamburger Icon - Appears on Mobile */}
        <div className="lg:hidden">
          <button onClick={() => setNavOpen(true)}>
            <FaBars size={28} />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">
          <li><a href="#home" className="cursor-pointer" >Home</a></li>
          <li><a href="#about" className="cursor-pointer">About </a></li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Mobile Sidebar - Slides in from the Right */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black text-white p-6 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setNavOpen(false)}
        >
          <FaTimes size={28} />
        </button>
        <ul className="flex flex-col gap-6 mt-10 text-lg">
          <li><a href="#home" className="cursor-pointer" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about" className="cursor-pointer" onClick={() => setNavOpen(false)}>About</a></li>
          <li className="cursor-pointer" onClick={() => setNavOpen(false)}>Projects</li>
          <li className="cursor-pointer" onClick={() => setNavOpen(false)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;