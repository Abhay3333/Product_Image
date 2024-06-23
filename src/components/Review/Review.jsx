import React from 'react';

const Review = () => {
  const reviews = [
    {
      rating: 5,
      title: 'Very Useful',
      content: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class Aptent Taciti Sociosqu',
      author: 'Alexa',
      verified: true,
    },
    {
      rating: 5,
      title: 'Very Useful',
      content: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class Aptent Taciti Sociosqu',
      author: 'Alexa',
      verified: true,
    },
    {
      rating: 5,
      title: 'Very Useful',
      content: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nunc Vulputate Libero Et Velit Interdum, Ac Aliquet Odio Mattis. Class Aptent Taciti Sociosqu',
      author: 'Alexa',
      verified: true,
    }
  ];

  return (
    <div className="bg-green-50 p-8 text-center mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>
      
      <div className="flex justify-center space-x-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm w-80">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="font-bold mb-2">{review.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{review.content}</p>
            <div className="flex justify-center items-center">
              <span className="font-semibold mr-2">{review.author}</span>
              
              {review.verified && (
                
                <span className="text-sm text-gray-500 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified Buyer
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded">Read All Reviews</button>
      </div>
    </div>
  );
};

export default Review;