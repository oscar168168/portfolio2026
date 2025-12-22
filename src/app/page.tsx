"use client";
import { useEffect } from "react";

import Hero from "./hero/page";
import About from "./about/page";
import Project from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  useEffect(() => {
    // Smooth scroll configuration with offset margin
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;

      e.preventDefault();
      const href = target.getAttribute("href");
      if (!href) return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate the offset position with margin (100px from top)
        const offsetMargin = 100; // Adjust this value for more/less margin
        const elementPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offsetMargin;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Also handle button clicks that scroll to sections
    const handleButtonScroll = (e: MouseEvent) => {
      const button = e.target as HTMLElement;
      if (
        button.tagName === "BUTTON" &&
        button.textContent?.includes("Let's Talk") &&
        button.closest("nav")
      ) {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const offsetMargin = 80;
          const elementPosition =
            contactSection.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offsetMargin;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    document.addEventListener("click", handleButtonScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      document.removeEventListener("click", handleButtonScroll);
    };
  }, []);

  return (
    <main className="relative md:space-y-8 space-y-4">
      {/* Grid Background - Fixed */}
      <div className="fixed inset-0 -z-20 h-full w-full">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

        {/* Grid pattern - Vertical lines only */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "360px 100%",
          }}
        ></div>

        {/* Gradient overlay to fade grid at edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>

        {/* Additional accent gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
