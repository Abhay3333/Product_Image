import React from 'react';
import Frame1 from '../../assests/Frame1.png';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center mb-4 mt-16">
      {/* Top image with text overlay */}
      <div className="relative w-full h-96">
        <img
          src={Frame1}
          alt="Oranges on tree"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black bg-opacity-5 flex flex-col justify-center items-end p-4">
          <h1 className="text-white text-4xl font-bold">Made From Fresh <br/>Oranges</h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nunc vulputate libero et velit<br/> interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>

      {/* Bottom section with two images and text */} 
      <div className="w-full flex flex-col md:flex-row items-start mt-8 px-4 text-black">
        {/* Text section */}
        <div className="md:w-1/3 mb-4 md:mb-0 mt-28 ml-16">
          <h2 className="text-4xl font-bold">Made From Fresh <br/>Oranges</h2>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit. Nunc vulputate libero et velit<br/> interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Images section */}
        <div className="md:w-2/3 flex flex-row justify-end  mr-10">
          <img
            src={Frame1}
            alt="Oranges on tree"
            className="w-1/3 h-80 object-cover"
          />
          <img
            src={Frame1}
            alt="Oranges on tree"
            className="w-1/3 h-80 object-cover ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
