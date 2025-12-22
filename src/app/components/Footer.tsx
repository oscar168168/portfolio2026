"use client";
import React, { useState, useEffect, useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "UX/UI Design", href: "#" },
        { name: "Graphic Design", href: "#" },
        { name: "Branding", href: "#" },
        { name: "Consultation", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "#" },
        { name: "Behance", href: "#" },
        { name: "Dribbble", href: "#" },
        { name: "Instagram", href: "#" },
      ],
    },
  ];

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

    if (footerRef.current && !hasAnimated) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <footer
      ref={footerRef}
      className="w-full relative bg-black/20 backdrop-blur-sm border-t border-white/10"
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 font-sans text-white">
        {/* Background blur effects */}
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[140px] w-32 h-32 sm:w-48 sm:h-48 bg-violet-400/30 bottom-0 left-0" />
        <div className="absolute -z-10 rounded-full blur-[120px] sm:blur-[160px] w-40 h-40 sm:w-56 sm:h-56 bg-pink-400/20 bottom-0 right-0" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section with animation */}
          <div
            className={`space-y-4 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold">Rat Raksmey</h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed">
              Creating beautiful and functional designs that make a difference.
            </p>
            <div className="flex gap-3">
              {["💼", "🎨", "🏀", "📷"].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-white/10 hover:bg-violet-400 flex items-center justify-center transition-all duration-700 ease-out hover:scale-110 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className="text-lg">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links with staggered animation */}
          {footerLinks.map((section, index) => (
            <div
              key={index}
              className={`space-y-4 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <h4 className="text-lg sm:text-xl font-bold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`transition-all duration-500 ease-out ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${700 + index * 100 + linkIndex * 50}ms`,
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-sm sm:text-base text-white/60 hover:text-violet-400 transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section with animation */}
        <div
          className={`border-t border-white/10 pt-8 mb-8 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="max-w-md">
            <h4 className="text-lg sm:text-xl font-bold mb-3">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-4">
              Subscribe to get notified about new projects and design insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-violet-400 transition-colors duration-300 text-white placeholder-white/40 text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-violet-400 hover:bg-violet-500 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with animation */}
        <div
          className={`border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
            © {currentYear} Rat. Raksmey. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm text-white/60">
            <a
              href="#"
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-violet-400 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
