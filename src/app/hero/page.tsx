import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div
        id="home"
        className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-4rem)] w-full max-w-[1500px] py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 relative justify-between gap-6 sm:gap-8 lg:gap-12 font-sans mx-auto text-white"
      >
        {/* Background blur effects */}
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] w-32 h-32 sm:w-48 sm:h-48 lg:w-[400px] lg:h-[400px] bg-violet-400 top-0 left-0" />
        <div className="absolute -z-10 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] w-48 h-48 sm:w-64 sm:h-64 lg:w-[600px] lg:h-[600px] bg-pink-400/60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[210px] h-24 w-48 sm:h-32 sm:w-64 lg:h-40 lg:w-80 bg-pink-400/50 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2" />

        {/* Content section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-between gap-6 lg:gap-0">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="md:py-12 py-6">
              <span className="">Rat.</span> Raksmey
            </h1>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70">
              UXUI Designer - Graphic Designer
            </h4>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed max-w-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates necessitatibus officia incidunt aliquam excepturi alias
              similique distinctio sequi rem laudantium. Illo, cumque nulla
              corrupti nesciunt totam aperiam ratione esse amet!
            </p>
          </div>
          <button className="w-full sm:w-fit">Let&#39;s Talk</button>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-[50%] h-64 sm:h-80 bg-white md:h-96 lg:h-full relative overflow-hidden">
          <Image
            src="/images/hero.jpg"
            className="w-full h-full object-cover"
            alt="Hero background"
            width={2000}
            height={2000}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
