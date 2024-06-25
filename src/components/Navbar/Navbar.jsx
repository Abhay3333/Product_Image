import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col w-full">
      <div className="bg-black text-white text-center py-2 sm:py-3 font-semibold text-sm sm:text-base">
        <p>Welcome to our Store</p>
      </div>
      <div className="flex justify-between items-center w-full font-semibold px-2 sm:px-4 py-3 sm:py-5 relative">
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu items */}
        <div className="hidden lg:flex space-x-4">
          {['Shop', 'Juices', 'About', 'Others'].map((item) => (
            <div key={item} className="relative group">
              <button className="flex items-center text-sm sm:text-base">
                {item}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Logo */}
        <div className="text-xl sm:text-3xl font-semibold">LOGO</div>

        {/* Icons */}
        <div className="flex space-x-2 sm:space-x-4">
          {['search', 'cart', 'user'].map((icon) => (
            <button key={icon} className={icon === 'user' ? 'hidden sm:block' : ''}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {icon === 'search' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                {icon === 'cart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />}
                {icon === 'user' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 bg-gray-100 py-4 w-full">
          {['Shop', 'Juices', 'About', 'Others'].map((item) => (
            <button key={item} className="flex items-center">
              {item}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;