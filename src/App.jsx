import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CirclesSection from "./components/CirclesSection";

const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <CirclesSection />
    </div>
  );
};

export default App;
