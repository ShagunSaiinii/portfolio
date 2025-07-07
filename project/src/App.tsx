import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-poppins">
            © 2024 Shagun Saini. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;