"use client";
import Link from "next/link";
import React, { useState } from "react";

const menu = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-14 sm:h-16 flex justify-between bg-white/1 border backdrop-blur border-white/10  z-50 items-center px-4 sm:px-6 md:px-12 lg:px-20 sticky top-0">
        {/* Logo */}
        <a href={menu[0].link} className="flex items-center gap-2">
          <h5 className="text-base sm:text-lg md:text-xl font-semibold text-white">
            Rat Raksmey
          </h5>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:underline tracking-wider underline-offset-8 decoration-2 decoration-white/30 transition-all text-sm lg:text-base"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block">Let&#39;s Talk</button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1 !size-5 !bg-transparent justify-end items-end z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-4 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 w-5 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-4 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-4 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 w-5 -translate-y-1" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menu.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              onClick={closeMenu}
              className={`text-2xl sm:text-3xl font-medium hover:text-violet-400 transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={closeMenu}
            className={`mt-4 h-12 px-8 font-medium bg-white text-red-900 rounded-full hover:bg-gray-100 transition-all duration-300 text-base ${
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <Link href="#contact">Let&#39;s Talk</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
