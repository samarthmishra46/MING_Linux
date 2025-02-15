import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-[#2C001E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo size={40} className="text-[#E95420]" />
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">MING</span>
                <span className="text-sm text-gray-400">LINUX</span>
              </div>
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
}

export default Navbar;