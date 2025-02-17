import React from 'react';
import { Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <span>© 2025 MING Linux</span>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="https://github.com" className="hover:text-[#E95420] transition-colors">
              <Github size={24} />
            </a>
            <a href="/donate" className="flex items-center space-x-2 hover:text-[#E95420] transition-colors">
              <Heart size={24} />
              <span>Support MING Linux</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;