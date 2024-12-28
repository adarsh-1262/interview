import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const CirclesSection = () => {
  return (
    <section className="relative w-full h-auto bg-white py-12">
      {/* Desktop Layout: First Row */}
      <div className="absolute top-8 sm:top-[35px] left-[5%] sm:left-[3%] hidden sm:block">
        <div
          className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none"
          style={{
            backgroundColor: "#014458",
          }}
        ></div>
      </div>

      <div className="absolute top-8 sm:top-[35px] left-[30%] sm:left-[32.5%] hidden sm:block">
        <div className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img src={image1} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute top-8 sm:top-[35px] left-[45%] sm:left-[45%] hidden sm:block">
        <div
          className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none"
          style={{
            background:
              "linear-gradient(214.46deg, #F1907B 10.19%, rgba(241, 217, 202, 0.11) 94.4%)",
          }}
        ></div>
      </div>

      <div className="absolute top-8 sm:top-[35px] left-[62.7%] sm:left-[57.7%] hidden sm:block">
        <div className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none">
          <img src={image2} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute top-8 sm:top-[35px] right-[10%] sm:right-[5%] hidden sm:block">
        <div
          className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none"
          style={{
            backgroundColor: "#F37A60",
          }}
        ></div>
      </div>

      {/* Second Row */}
      <div className="absolute top-[190px] sm:top-[190px] left-[10%] sm:left-[17%] hidden sm:block">
        <div className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none">
          <img src={image3} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="absolute top-[215px] sm:top-[215px] right-[10%] sm:right-[5%] hidden sm:block">
        <div
          className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none"
          style={{
            backgroundColor: "#014458",
          }}
        ></div>
      </div>

      {/* Ellipse */}
      <div className="absolute top-[215px] sm:top-[215px] left-[45%] sm:left-[57.7%] w-[280px] sm:w-[350px] h-[140px] sm:h-[180px] bg-[#013A4D] rounded-full overflow-hidden hidden sm:block">
        <img src={image4} className="w-full h-full object-cover" />
      </div>

      {/* Mobile Version: Stacked Circles */}
      <div className="block sm:hidden">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none" style={{ backgroundColor: "#014458" }}></div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img src={image1} className="w-full h-full object-cover" />
          </div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none" style={{ background: "linear-gradient(214.46deg, #F1907B 10.19%, rgba(241, 217, 202, 0.11) 94.4%)" }}></div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none">
            <img src={image2} className="w-full h-full object-cover" />
          </div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none" style={{ backgroundColor: "#F37A60" }}></div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none">
            <img src={image3} className="w-full h-full object-cover" />
          </div>
          <div className="w-[350px] h-[180px] bg-[#013A4D] rounded-full overflow-hidden">
            <img src={image4} className="w-full h-full object-cover" />
          </div>
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-lg border-4 border-none" style={{ backgroundColor: "#014458" }}></div>
        </div>
      </div>
    </section>
  );
};

export default CirclesSection;
