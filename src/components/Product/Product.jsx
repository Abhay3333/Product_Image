import React, { useState } from 'react';
import Frame from '../../assests/Frame.png'

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Left column - Images */}
        <div className="md:w-1/2 flex flex-col md:flex-row">
          {!isMobile && (
            <div className="w-1/3 mr-4 flex flex-col">
              {[1, 2, 3, 4, 5].map((i) => (
                <img key={i} src={Frame} alt={`Thumbnail ${i}`} className="mb-4 cursor-pointer object-cover w-full aspect-square" />
              ))}
            </div>
          )}
          <div className="w-full md:w-4/5 flex flex-col">
            <div className="flex-grow relative">
              <img src={Frame} alt="Main product" className="w-full h-auto md:h-[770px] object-cover" />
            </div>
            <div className="flex justify-center mt-4">
              <span className="h-2 w-2 bg-black rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
            </div>
          </div>
        </div>

        {/* Right column - Product details */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 flex flex-col">
          <h1 className="text-3xl font-bold mb-2">Product Name</h1>
          <p className="mb-4">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">4.8 88,888+ Trusted Customer Reviews</span>
          </div>

          <p className="text-2xl font-bold mb-4">$10.99</p>

          <div className="mb-4">
            <p className="font-semibold mb-2">SIZE</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-black text-white">500ml</button>
              <button className="px-4 py-2 border border-gray-300">250ml</button>
              <button className="px-4 py-2 border border-gray-300">750ml</button>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Quantity</p>
            <div className="flex items-center border border-gray-300 w-24">
              <button className="px-3 py-1" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="px-3 py-1 border-l border-r border-gray-300">{quantity}</span>
              <button className="px-3 py-1" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="w-full bg-white text-black border border-black py-2 mb-2">Add To Cart</button>
          <button className="w-full bg-black text-white py-2 mb-4">Buy Now</button>

          <p className="mb-4">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>

          {['Ingredients', 'Storage', 'Return Policy'].map((item) => (
            <div key={item} className="border-t border-gray-200 py-4 flex justify-between items-center">
              <span>{item}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;