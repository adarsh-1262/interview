import React from "react";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 sm:py-16 bg-white">
      {/* Heading */}
      <div className="max-w-3xl mb-8 mt-24">
        <h1 className="font-[Nunito Sans] font-light text-[50px] sm:text-4xl md:text-5xl leading-snug sm:leading-relaxed tracking-tight md:tracking-tight">
          Personalize experiences to win over <br /> customers — seamlessly.
        </h1>
      </div>
      
      {/* Partition */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Left Side - 1/3 */}
        <div className="flex flex-col items-start mb-6 md:mb-0 md:w-1/2">
          <button className="px-6 py-3 bg-black text-white rounded-md text-sm sm:text-base tracking-wide hover:bg-gray-800 transition duration-200">
            REQUEST DEMO
          </button>
        </div>

        {/* Right Side - 2/3 */}
        <div className="text-gray-900 text-base sm:text-[16px] leading-6 sm:leading-7 md:w-1/2">
          With Glood's data-powered personalization tools, make shopping
          <br />
          experiences personal and engage shoppers, boost sales, and drive
          growth.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
