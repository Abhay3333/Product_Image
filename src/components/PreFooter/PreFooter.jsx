import React from 'react';
import Frame6 from '../../assests/Frame6.png';

const PreFooter = () => {
  return (
    <div className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8 font-bold mt-2">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Left side images */}
        <div className="w-full lg:w-2/3 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center pb-8 pt-8 lg:mb-0">
          <img
            src={Frame6}
            alt="Fresh oranges in greenhouse"
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={Frame6}
            alt="Fresh oranges in greenhouse"
            className="w-full sm:w-1/2 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right side text */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Fresh From The Farm</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Forem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;