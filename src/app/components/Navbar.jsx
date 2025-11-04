"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets, headerMenu } from "../../../assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);

  // Animate side menu whenever menuOpen changes
  useEffect(() => {
    if (sideMenuRef.current) {
      if (menuOpen) {
        sideMenuRef.current.style.transform = "translateX(0)";
      } else {
        sideMenuRef.current.style.transform = "translateX(16rem)";
      }
    }
  }, [menuOpen]);

  return (
    <>
      {/* Background Layer */}
      <div className="fixed top-0 right-0 left-0 w-11/12  translate-y-[-90%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full transition-all duration-300  z-10 backdrop-blur-md dark:bg-dark-200 dark:text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          {/* LOGO */}
          <Link href="/" className="logo-name">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Wajiha
            </span>
            <span className="text-pink-500 text-3xl leading-none">.</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-6 font-medium bg-white/70 backdrop-blur-md py-4 px-8 rounded-4xl dark:bg-dark-200">
            {headerMenu.map((headermenus, index) => (
              <li key={index}>
                <Link
                  href={headermenus.link}
                  className={`hover:text-pink-500 transition ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {headermenus.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-1">
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
                alt="theme color toggle"
              />
            </button>

            {/* Desktop Connect */}
            <Link
              href="#contact"
              className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition dark:hover:bg-gray-900"
            >
              <span>Connect</span>
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="arrow"
                className="w-2 h-2"
              />
            </Link>

            {/* Mobile Menu Button */}
            {/* {menuOpen
              ? darkMode
                ? "white close"
                : "black close"
              : darkMode
              ? "white open"
              : "black open"} */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden focus:outline-none"
            >
              {isDarkMode ? (
                <Image
                  src={assets.menu_white}
                  alt="Menu"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <Image
                  src={assets.menu_black}
                  alt="Menu"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SIDE MENU (uses ref for animation) */}
        <div
          ref={sideMenuRef}
          className={`md:hidden flex flex-col gap-4 items-center py-8 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen shadow-lg transition-transform duration-500 ${
            isDarkMode ? "bg-[#0b001a]" : "bg-white/90 backdrop-blur-md"
          }`}
          style={{ transform: "translateX(16rem)" }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none absolute p-4 top-0 right-0"
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu"
              width={20}
              height={20}
              className="w-5 h-5 object-contain"
            />
          </button>

          {headerMenu.map((headermenus, index) => (
            <Link
              key={index}
              href={headermenus.link}
              onClick={() => setMenuOpen(false)}
              className={`text-lg ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              } hover:text-pink-500 transition`}
            >
              {headermenus.title}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className={`text-lg ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            } hover:text-pink-500 transition`}
          >
            Connect
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
