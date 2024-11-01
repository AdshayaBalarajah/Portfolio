import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">My Portfolio</h1>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="font-semibold text-2xl">
          <FaBars size={28} className="text-white" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4 text-2xl">
        <Link
          to="home"
          smooth={true}
          offset={-15}
          duration={500}
          className="desktopMenuListItem cursor-pointer font-semibold text-2xl"
        >
          Home
        </Link>
        <Link
          to="technologies"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem cursor-pointer font-semibold text-2xl"
        >
          Technologies
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem cursor-pointer font-semibold text-2xl"
        >
          Projects
        </Link>
        <Link
          to="education"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem cursor-pointer font-semibold text-2xl"
        >
          Education
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem cursor-pointer font-semibold text-2xl"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden flex-col items-center bg-black fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center w-full p-4">
          <h2 className="text-2xl text-white"></h2>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes size={28} className="text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center mt-20 space-y-8 text-2xl font-semibold text-white">
          <Link
            to="home"
            smooth={true}
            offset={-20}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="technologies"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Technologies
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

