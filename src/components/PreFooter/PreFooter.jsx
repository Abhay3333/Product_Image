import React from 'react';
import Frame6 from '../../assests/Frame6.png';

const FreshFromFarm = () => {
  return (
    <div className="bg-green-50 py-8 px-2 font-bold mt-2">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-4">
        {/* Left side images */}
        <div className="md:w-2/3 flex space-x-4 justify-center pb-8 pt-8 md:mb-0">
          <img
            src={Frame6}
            alt="Fresh oranges in greenhouse"
            className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
          />
          <img
            src={Frame6}
            alt="Fresh oranges in greenhouse"
            className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right side text */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold mb-4">Fresh From The Farm</h2>
          <p className="text-gray-600">
            Forem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreshFromFarm;