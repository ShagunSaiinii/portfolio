import React, { useState, useEffect } from 'react';
import { Code, MapPin, Mail, Phone, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Passionate about AI, Cloud, and Full Stack Development.",
    "Turning ideas into impact with intelligent systems and scalable apps."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 relative">
      {/* Background Vertical Line Animation */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#DCDCDC] to-transparent opacity-20">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#DCDCDC] to-transparent animate-pulse"></div>
      </div>
      
      {/* Header Navigation */}
      <nav className="absolute top-6 right-6 flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 font-medium">
          <Download className="w-4 h-4 inline mr-2" />
          Download Resume
        </button>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-800 rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105">
              Available for Hire
            </button>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-inter">
              Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Shagun Saini</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-poppins">
              "Building Future with AI, Cloud, and Code."
            </p>
            <div className="h-16 flex items-center">
              <p className="text-lg text-gray-400 font-poppins animate-fade-in">
                {taglines[currentTagline]}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              View Projects
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Contact Info
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center border-4 border-gray-600 hover:border-gray-500 transition-all duration-300">
              <div className="w-56 h-56 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-6xl text-white font-bold">SS</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-black"></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 w-full max-w-sm">
            <button className="w-full bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <MapPin className="w-5 h-5" />
              <span>Location</span>
            </button>
            <button className="w-full bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </button>
            <button className="w-full bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-gray-700 transition-all duration-300 hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Contact Number</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-white" />
            </a>
            <a href="#" className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;