import React from 'react';
import { CreditCard, Heart, Coffee } from 'lucide-react';

const Donate = () => {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-[#E95420] mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Support MING Linux</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your donation helps us maintain and improve MING Linux. Every contribution, no matter how small, makes a difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Choose Your Contribution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button className="p-4 border-2 border-[#000000] rounded-md hover:bg-[#000000] hover:text-white transition-color">
                $5
              </button>
              <button className="p-4 border-2 border-[#000000] rounded-md hover:bg-[#000000] hover:text-white transition-colors">
                $10
              </button>
              <button className="p-4 border-2 border-[#000000] rounded-md hover:bg-[#000000] hover:text-white transition-colors">
                $25
              </button>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 mb-2">Or enter custom amount:</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-md focus:border-[#E95420] focus:ring focus:ring-[#E95420] focus:ring-opacity-50"
                placeholder="Enter amount"
                min="1"
              />
            </div>

            <button className="w-full bg-[#000000] text-white px-6 py-3 rounded-md hover:bg-[#ffffff] hover:text-black transition-colors flex items-center justify-center">
              <CreditCard className="mr-2" />
              Donate Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Other Ways to Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Coffee className="w-6 h-6 text-[#E95420] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Buy us a coffee</h3>
                  <p className="text-gray-600">Support us through Buy Me a Coffee platform</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-[#E95420] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Become a Patron</h3>
                  <p className="text-gray-600">Support us with a monthly donation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;