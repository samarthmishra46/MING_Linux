import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  {
    url: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "MING Linux Desktop",
    caption: "Modern and Elegant Desktop Environment"
  },
  {
    url: "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Terminal Interface",
    caption: "Powerful Command Line Tools"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Development Environment",
    caption: "Perfect for Developers"
  },
  {
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Security Features",
    caption: "Enhanced Security Features"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#000000] to-[#4f4c4f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to MING Linux
            </h1>
            <p className="text-xl mb-8">
              A powerful, secure, and user-friendly Linux distribution
            </p>
            <Link
              to="/download"
              className="inline-flex items-center bg-[#fcf7fc] text-black px-8 py-3 rounded-md hover:bg-[#C7431B] transition-colors"
            >
              Download Now
              <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Terminal className="w-12 h-12 text-[#E95420] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Powerful Terminal</h3>
            <p className="text-gray-600">
              Advanced command-line interface for complete system control
            </p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-[#E95420] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-600">
              Built-in security features to keep your system protected
            </p>
          </div>
          <div className="text-center p-6">
            <Zap className="w-12 h-12 text-[#E95420] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Optimized performance for smooth operation
            </p>
          </div>
        </div>
      </div>

      {/* Screenshot Carousel Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beautiful by Design</h2>
            <p className="text-gray-600">
              Experience the perfect blend of aesthetics and functionality
            </p>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-xl aspect-video">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <p className="text-lg font-semibold text-center">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white scale-110'
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;