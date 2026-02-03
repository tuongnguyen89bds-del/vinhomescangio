
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tighter uppercase text-secondary">Green Paradise</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-secondary">
          <a href="#overview" className="hover:text-primary transition">Overview</a>
          <a href="#progress" className="hover:text-primary transition">Progress</a>
          <a href="#location" className="hover:text-primary transition">Location</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#policy" className="hover:text-primary transition">Policy</a>
        </nav>

        <a href="tel:0900123456" className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold tracking-wider hover:bg-secondary transition-colors whitespace-nowrap">
          HOTLINE: 0900 123 456
        </a>
      </div>
    </header>
  );
};

export default Header;
