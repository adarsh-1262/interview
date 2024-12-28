import React, { useState } from "react";
import logo from "../assets/logo.png";
import dropdownArrow from "../assets/Vector.svg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null); // Controls dropdown state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controls mobile menu state

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
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white border-none w-full px-4 py-2 fixed top-[10px] left-0 z-50">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[50px] w-[80px]" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 text-sm items-center ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          {navItems.map((item, index) =>
            item !== "PRICING" && item !== "CONTACT US" ? (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleDropdownToggle(index)}
                onMouseLeave={() => handleDropdownToggle(null)}
              >
                <div className="flex items-center cursor-pointer">
                  {item}
                  {/* Use the imported SVG as the dropdown icon */}
                  <img
                    src={dropdownArrow}
                    alt="Dropdown"
                    className="ml-2 h-2 mt-1 w-4 text-gray-500" // Adjust size as needed
                  />
                </div>
              </li>
            ) : (
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>

        {/* Desktop "Book a Demo" Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 bg-black text-white rounded-md text-sm ">
            Book a Demo
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full p-4 mt-16 shadow-md">
          <ul className="space-y-4 text-sm">
            {navItems.map((item, index) =>
              item !== "PRICING" && item !== "CONTACT US" ? (
                <li key={index}>
                  <div className="flex justify-between items-center">
                    <span>{item}</span>
                    <button
                      className="ml-2 text-xs text-gray-500"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      ˅
                    </button>
                  </div>
                  {isDropdownOpen === index && (
                    <div className="mt-2 w-full bg-white shadow-lg border rounded-md">
                      <ul className="text-sm">
                        <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Option 3</li>
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={index}>{item}</li>
              )
            )}
            {/* Mobile "Book a Demo" Button */}
            <li>
              <button className="w-full px-4 py-2 bg-black text-white rounded-md text-sm">
                Book a Demo
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
