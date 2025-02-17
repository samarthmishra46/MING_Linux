import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#000000] text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img
                src="ming-removebg-preview.png"
                alt="MING Linux Logo"
                height={200}
                width={200}
              />
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-[#E95420] transition-colors">
              Home
            </Link>
            <Link to="/download" className="hover:text-[#E95420] transition-colors">
              Download
            </Link>
            <Link to="/donate" className="hover:text-[#E95420] transition-colors">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
