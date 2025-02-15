import React from 'react';
import { Download as DownloadIcon, HardDrive } from 'lucide-react';

const Download = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Download MING Linux</h1>
          <p className="text-gray-600">
            Choose the version that best suits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Desktop Version */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <HardDrive className="w-12 h-12 text-[#E95420] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">MING Linux Desktop</h2>
            <p className="text-gray-600 mb-4">
              Recommended for personal computers and workstations
            </p>
            <ul className="text-gray-600 mb-6">
              <li>• 4GB RAM (minimum)</li>
              <li>• 25GB disk space</li>
              <li>• 64-bit processor</li>
            </ul>
            <button 
              className="w-full bg-[#E95420] text-white px-6 py-3 rounded-md hover:bg-[#C7431B] transition-colors flex items-center justify-center"
              onClick={() => alert("ISO download link will be provided by you")}
            >
              <DownloadIcon className="mr-2" />
              Download 64-bit
            </button>
          </div>

          {/* Server Version */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <HardDrive className="w-12 h-12 text-[#E95420] mb-4" />
            <h2 className="text-2xl font-semibold mb-2">MING Linux Server</h2>
            <p className="text-gray-600 mb-4">
              Optimized for servers and cloud infrastructure
            </p>
            <ul className="text-gray-600 mb-6">
              <li>• 2GB RAM (minimum)</li>
              <li>• 20GB disk space</li>
              <li>• 64-bit processor</li>
            </ul>
            <button 
              className="w-full bg-[#E95420] text-white px-6 py-3 rounded-md hover:bg-[#C7431B] transition-colors flex items-center justify-center"
              onClick={() => alert("ISO download link will be provided by you")}
            >
              <DownloadIcon className="mr-2" />
              Download Server
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
          <p className="text-gray-600">
            For the best experience, your computer should meet these requirements
          </p>
        </div>
      </div>
    </div>
  );
}

export default Download;