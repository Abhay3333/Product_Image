import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Frame2 from '../../assests/Frame2.png';
import Frame3 from '../../assests/Frame3.png';
import Frame4 from '../../assests/Frame4.png';
import Frame5 from '../../assests/Frame5.png';

const ProductCard = ({ image, title, price, rating, reviews }) => (
  <div className="flex flex-col items-center px-4">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">From ${price}</p>
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      ))}
      <span className="ml-2 text-gray-600">({reviews})</span>
    </div>
    <button className="border border-black py-2 px-4 w-full hover:bg-gray-100 transition">
      Shop Now
    </button>
  </div>
);

const Recommended = () => {
  const products = [
    {
      image: Frame2,
      title: "Orange Juice Pulpy",
      price: "5.00",
      rating: 5,
      reviews: 48,
    },
    {
      image: Frame3,
      title: "Orange Juice Pulpy",
      price: "5.00",
      rating: 5,
      reviews: 48,
    },
    {
      image: Frame4,
      title: "Orange Juice Pulpy",
      price: "5.00",
      rating: 5,
      reviews: 48,
    },
    {
      image: Frame5,
      title: "Orange Juice Pulpy",
      price: "5.00",
      rating: 5,
      reviews: 48,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-8 mx-8">You May Also Like</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Slider>
    </div>
  );
};

export default Recommended;