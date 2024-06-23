import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 pl-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Logo and Newsletter */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Logo</h2>
          <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
          <p className="mb-4">Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem</p>
          <div className="flex items-center border-b border-white pb-2 w-72">
            <input type="email" placeholder="Email" className="bg-transparent flex-grow focus:outline-none w-full mr-2" />
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        {['Navigation', 'Shop', 'About Us', 'Support'].map((title, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/6 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <ul>
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item, i) => (
                <li key={i} className="mb-2">
                  <a href="#" className="text-gray-400 hover:text-white">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
