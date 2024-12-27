"use client";
import { Caveat } from "next/font/google";
import { useState } from "react";

const myFont = Caveat({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  // Handle menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]">
        <h1
          className={`${myFont.className} text-3xl sm:text-2xl lg:text-6xl font-extrabold text-green-600`}
        >
          Dynamic Blog
        </h1>
      </section>

      {/* Hamburger Menu Icon (Visible only on small screens) */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3">
        <button onClick={handleToggleMenu} className="focus:outline-none">
          <div className="space-y-2">
            <span className="block w-6 h-1 bg-green-600"></span>
            <span className="block w-6 h-1 bg-green-600"></span>
            <span className="block w-6 h-1 bg-green-600"></span>
          </div>
        </button>
      </div>

      {/* Navigation Links (Visible on large screens) */}
      <div
        id="collapseMenu"
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex lg:gap-x-10 lg:justify-center lg:items-center max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[280px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto`}
      >
        <ul className="lg:flex justify-center items-center gap-10 py-2">
          <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a href="/" className="hover:text-green-600 font-semibold block text-[15px]">
              Home
            </a>
          </li>
          <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a href="/about" className="hover:text-green-600 font-semibold text-[15px] block">
              About
            </a>
          </li>
          <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a href="/blog" className="hover:text-green-600 font-semibold text-[15px] block">
              Blog
            </a>
          </li>
          <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
            <a href="/contact" className="hover:text-green-600 font-semibold text-[15px] block">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
