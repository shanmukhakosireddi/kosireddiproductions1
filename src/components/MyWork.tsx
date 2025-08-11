import React from 'react';
import { ExternalLink, Play } from 'lucide-react';

const MyWork = () => {
  return (
    <section className="bg-[#f8f2ea] py-12 px-6 lg:px-12 min-h-screen w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-black uppercase">
            MY WORK
          </h1>
        </div>

        {/* Photo Grid Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((index) => {
              // Use your custom image for first item, Pexels for others
              // Array of your own image URLs in order
const customImages = [
  "https://i.postimg.cc/MGRn4BWj/burntcolor-mov-01-00-31-00-Still002.jpg", // Image 1
  "https://i.postimg.cc/B642Bpxv/Whats-App-Image-2025-08-11-at-10-53-14-4b1d561e.jpg", // Image 2
  "https://your-third-image-url.com",  // Image 3
  "https://your-fourth-image-url.com"  // Image 4
];

// Select image based on index
const imageUrl = customImages[index - 1] || customImages[0]; 

              
              return (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
              >
                {/* Hover background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-lg"></div>
                <img
                  src={imageUrl}
                  alt={`Work sample ${index}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
                />
              </div>
              );
            })}
          </div>
        </div>

        {/* Videos Section */}
{/* Videos Section */}
{/* Videos Section */}
<div className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black uppercase">
      MY VIDEOS
    </h2>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
    {[
      { id: "NSUw4cPtLJ4" },
      { id: "JlTWD9jh9as" },
      { id: "ACrOQ3WkOdo" },
      { id: "1DgAEc9206c" }
    ].map((video, index) => (
      <div
        key={index}
        className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative"
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=0&modestbranding=1&rel=0`}
          title={`YouTube video player ${index + 1}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    ))}
  </div>
</div>


        {/* YouTube Channel Section */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black uppercase mb-6">
            FIND ME ON YOUTUBE
          </h2>
          
          <p className="text-base lg:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            I post weekly content on filmmaking, creativity, and student life.
          </p>
          
          {/* YouTube Channel Info */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white font-bold text-2xl">SK</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Shanmukha Kosireddi
            </h3>
            <p className="text-sm text-black/60">
              @shanmukhakosireddi
            </p>
          </div>
          
          {/* Subscribe Button */}
          <a
            href="https://youtube.com/@shanmukhakosireddi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-red-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg relative group"
          >
            {/* Hover background overlay for button */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-red-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <ExternalLink className="w-5 h-5" />
            <span className="uppercase tracking-wide">Subscribe</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;