import React, { useState, useEffect } from 'react';

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const getLinkClass = (section) => (
    `hover-element-portfolio relative ${activeSection === section ? 'color-portfolio font-bold' : ''}`
  );

  return (
    <header className={`grey-portfolio fixed top-0 left-0 w-full bg-portfolio shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4">
        {/* Logo Section */}
        <div className="text-lg font-bold flex items-center mb-4 sm:mb-0">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-2"></div>
          <span>Morgan</span>
        </div>

        {/* Hamburger Button */}
        <button className="block sm:hidden focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex w-full sm:w-auto mt-4 sm:mt-0`}>
          <ul className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 sm:items-center w-full">
            <li className='navbar-scaling'>
              <a href="#home" className={getLinkClass('home')}>
                Accueil
              </a>
            </li>
            <li className='navbar-scaling'>
              <a href="#about" className={getLinkClass('about')}>
                A propos
              </a>
            </li>
            <li className='navbar-scaling'>
              <a href="#skills" className={getLinkClass('skills')}>
                Capacités
              </a>
            </li>
            <li className='navbar-scaling'>
              <a href="#portfolio" className={getLinkClass('portfolio')}>
                Mes projets
              </a>
            </li>
            <li className="sm:hidden">
              <a href="#contact" className="block text-center px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Me contacter
              </a>
            </li>
          </ul>
        </nav>

        {/* Button for large screens */}
        <a href="#contact" className="hidden sm:block px-4 py-2 rounded-full portfolio-btn mt-4 sm:mt-0">
          Me contacter
        </a>
      </div>
    </header>
  );
}
