import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row */}
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="text-xl sm:text-2xl font-bold text-white">
            <a href="#home">
              Vamshi<span className="text-blue-500">.</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                {label}
              </a>
            ))}

            {/* Social Links */}
            <a
              href="https://github.com/Vamshikrishna4124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vamshi-krishna-gondru-1770692b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white shadow-lg transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-blue-400 focus:outline-none transition"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg flex flex-col space-y-4">

            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-gray-200 hover:text-blue-400 transition"
                onClick={toggleMenu}
              >
                {label}
              </a>
            ))}

            <hr className="border-gray-600" />

            <a
              href="https://github.com/Vamshikrishna4124"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vamshi-krishna-gondru-1770692b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              LinkedIn
            </a>

          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;