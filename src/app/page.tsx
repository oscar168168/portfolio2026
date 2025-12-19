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
    <main>
      <Hero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
