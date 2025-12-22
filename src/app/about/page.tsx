"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Intersection observer for scroll animation (one-time only)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.disconnect(); // Stop observing after first animation
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (aboutRef.current && !hasAnimated) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div id="about" className="min-h-screen w-full relative">
      <div
        ref={aboutRef}
        className="flex flex-col lg:flex-row h-auto lg:min-h-screen w-full max-w-[1500px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative gap-8 sm:gap-12 lg:gap-16 font-sans mx-auto text-white"
      >
        {/* Background blur effects */}
        <div className="absolute -z-10 rounded-full blur-[120px] sm:blur-[160px] lg:blur-[220px] w-40 h-40 sm:w-56 sm:h-56 lg:w-[450px] lg:h-[450px] bg-violet-400/70 bottom-0 right-0" />
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[130px] lg:blur-[180px] w-56 h-56 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] bg-pink-400/40 bottom-1/3 right-1/4" />

        {/* Image section with animation */}
        <div
          className={`w-full lg:w-[45%] h-64 sm:h-80 md:h-96 lg:h-[600px] relative overflow-hidden transition-all duration-800 ease-out ${
            isVisible
              ? "opacity-100 -translate-x-0 scale-100"
              : "opacity-0 -translate-x-12 scale-95"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <Image
            src="/images/bg.jpg"
            className="w-full h-full object-cover"
            alt="About me"
            width={2000}
            height={2000}
          />
        </div>

        {/* Content section with staggered animations */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Title Animation */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              About Me
            </h2>

            <div className="space-y-4">
              {/* First paragraph */}
              <p
                className={`text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Hello! I'm Rat. Raksmey, a passionate UXUI and Graphic Designer
                with a keen eye for detail and a love for creating meaningful
                digital experiences. With several years of experience in the
                design industry, I specialize in crafting intuitive interfaces
                that not only look beautiful but also solve real problems.
              </p>

              {/* Second paragraph */}
              <p
                className={`text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                My design philosophy centers around user-centered thinking and
                creative problem-solving. I believe that great design is
                invisible—it seamlessly guides users through their journey while
                delighting them at every touchpoint.
              </p>

              {/* Third paragraph */}
              <p
                className={`text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                When I'm not designing, you can find me exploring new design
                trends, experimenting with creative tools, or enjoying a good
                cup of coffee while sketching new ideas.
              </p>
            </div>
          </div>

          {/* Skills or Stats with staggered animation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
            <div
              className={`space-y-2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400">
                5+
              </h3>
              <p className="text-sm sm:text-base text-white/70">
                Years Experience
              </p>
            </div>
            <div
              className={`space-y-2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-400">
                100+
              </h3>
              <p className="text-sm sm:text-base text-white/70">
                Projects Done
              </p>
            </div>
            <div
              className={`space-y-2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-400">
                50+
              </h3>
              <p className="text-sm sm:text-base text-white/70">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Button Animation */}
          <button
            className={`w-full sm:w-fit transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
