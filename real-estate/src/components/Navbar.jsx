import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  const handleLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <nav className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Logo" className='w-32' />

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-7 text-white'>
          <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
          <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
          <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
          <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full text-black hover:bg-gray-100 transition'>
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Open Menu"
          className='md:hidden w-7 cursor-pointer'
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          showMobileMenu ? 'fixed inset-0 bg-white/95 backdrop-blur-sm z-20' : 'h-0 overflow-hidden'
        }`}
      >
        <div className='flex justify-end p-6'>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="Close Menu"
            className='w-6 cursor-pointer'
          />
        </div>

        <ul className='flex flex-col items-center gap-4 mt-5 px-5 font-medium text-lg text-gray-800'>
          <li><a href="#Header" onClick={handleLinkClick} className='px-4 py-2 hover:bg-gray-100 rounded-full transition'>Home</a></li>
          <li><a href="#About" onClick={handleLinkClick} className='px-4 py-2 hover:bg-gray-100 rounded-full transition'>About</a></li>
          <li><a href="#Projects" onClick={handleLinkClick} className='px-4 py-2 hover:bg-gray-100 rounded-full transition'>Projects</a></li>
          <li><a href="#Testimonials" onClick={handleLinkClick} className='px-4 py-2 hover:bg-gray-100 rounded-full transition'>Testimonials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
