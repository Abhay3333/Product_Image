import React from 'react';
import Frame1 from '../../assests/Frame1.png';

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center mb-4">
      {/* Top image with text overlay - visible on all screens */}
      <div className="relative w-full h-[50vh] md:h-[70vh]">
        <img
          src={Frame1}
          alt="Oranges on tree"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            Made From Fresh <br className="hidden md:block"/> Oranges
          </h1>
          <p className="text-white mt-2 text-sm md:text-base max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>

      {/* Bottom section with two images and text - hidden on mobile */}
      <div className="w-full hidden md:flex flex-row items-start mt-8 px-4 text-black">
        {/* Text section */}
        <div className="w-1/3 mb-4 md:mb-0 mt-28 ml-16 text-left">
          <h2 className="text-4xl font-bold">
            Made From Fresh <br/> Oranges
          </h2>
          <p className="mt-2 text-base">
            Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Nunc vulputate libero et velit <br/> interdum, ac aliquet odio mattis.
          </p>
        </div>

        {/* Images section */}
        <div className="w-2/3 flex flex-row justify-end mr-10">
          <img
            src={Frame1}
            alt="Oranges on tree"
            className="w-1/2 h-80 object-cover"
          />
          <img
            src={Frame1}
            alt="Oranges on tree"
            className="w-1/2 h-80 object-cover ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;