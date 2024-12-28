import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen(isDropdownOpen === index ? null : index);
  };

  const navItems = [
    "PRODUCTS",
    "SOLUTIONS",
    "ABOUT",
    "PLATFORM",
    "PRICING",
    "CONTACT US",
    "RESOURCES",
  ];

  return (
    <div>
      <nav
        className="flex justify-between items-center bg-white border-none w-full px-4 py-2 fixed top-0 left-0 z-50"
      >
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[50px] w-[80px]"
          />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`flex space-x-8 text-sm ${isMobileMenuOpen ? "block" : "hidden"} md:flex`}>
          {navItems.map((item, index) => (
            item !== "PRICING" && item !== "CONTACT US" ? (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                {item}
                <button
                  className="ml-2 text-xs text-gray-500 text-center"
                  onClick={() => handleDropdownToggle(index)}
                >
                  ˅
                </button>

                {isDropdownOpen === index && (
                  <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg border rounded-md">
                    <ul className="text-sm">
                      <li className="px-2 py-1 hover:bg-gray-100">Option 1</li>
                      <li className="px-2 py-1 hover:bg-gray-100">Option 2</li>
                      <li className="px-2 py-1 hover:bg-gray-100">Option 3</li>
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={index}>{item}</li>
            )
          ))}
        </ul>

        {/* Book a Demo Button */}
        <div>
          <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
            Book a Demo
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full p-4">
          <ul className="space-y-4 text-sm">
            {navItems.map((item, index) => (
              item !== "PRICING" && item !== "CONTACT US" ? (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    {item}
                    <button
                      className="ml-2 text-xs text-gray-500 text-center"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      ˅
                    </button>

                    {isDropdownOpen === index && (
                      <div className="mt-2 w-32 bg-white shadow-lg border rounded-md">
                        <ul className="text-sm">
                          <li className="px-2 py-1 hover:bg-gray-100">Option 1</li>
                          <li className="px-2 py-1 hover:bg-gray-100">Option 2</li>
                          <li className="px-2 py-1 hover:bg-gray-100">Option 3</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ) : (
                <li key={index}>{item}</li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
