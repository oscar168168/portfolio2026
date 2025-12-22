"use client";
import { Locate, Mail, Phone } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rat.raksmey@email.com",
      link: "mailto:rat.raksmey@email.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+855 12 345 678",
      link: "tel:+85512345678",
    },
    {
      icon: Locate,
      title: "Location",
      value: "Phnom Penh, Cambodia",
      link: "#",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", link: "#" },
    { name: "Behance", icon: "🎨", link: "#" },
    { name: "Dribbble", icon: "🏀", link: "#" },
    { name: "Instagram", icon: "📷", link: "#" },
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

    if (contactRef.current && !hasAnimated) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div id="contact" className="min-h-screen w-full relative">
      <div
        ref={contactRef}
        className="w-full max-w-[1500px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative font-sans mx-auto text-white"
      >
        {/* Background blur effects */}
        <div className="absolute -z-10 rounded-full blur-[120px] sm:blur-[160px] lg:blur-[220px] w-40 h-40 sm:w-56 sm:h-56 lg:w-[450px] lg:h-[450px] bg-violet-400/60 top-0 right-0" />
        <div className="absolute -z-10 rounded-full blur-[140px] sm:blur-[180px] lg:blur-[240px] w-56 h-56 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] bg-pink-400/50 bottom-0 left-0" />
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[140px] lg:blur-[200px] w-48 h-48 sm:w-64 sm:h-64 lg:w-[400px] lg:h-[400px] bg-violet-400/40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

        {/* Header with animation */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Get In Touch
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Have a project in mind? Let's work together to create something
            amazing. Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Info with animation */}
          <div className="w-full lg:w-[40%] space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3
                className={`text-xl sm:text-2xl font-bold transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className={`flex items-start gap-4 p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-700 ease-out group ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <Icon className="size-5 sm:size-6 font-light text-violet-400" />
                    <div>
                      <p className="text-xs sm:text-sm text-white/60 mb-1">
                        {info.title}
                      </p>
                      <p className="text-sm sm:text-base font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links with animation */}
            <div className="space-y-4">
              <h3
                className={`text-xl sm:text-2xl font-bold transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-violet-400 transition-all duration-700 ease-out group ${
                      isVisible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    <span className="text-sm sm:text-base">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with animation */}
          <div
            className={`w-full lg:w-[60%] transition-all duration-800 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-12 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <h3
                className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                Send Me a Message
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                >
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-violet-400 transition-colors duration-300 text-white placeholder-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-violet-400 transition-colors duration-300 text-white placeholder-white/40"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <label className="block text-sm text-white/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-violet-400 transition-colors duration-300 text-white placeholder-white/40"
                  />
                </div>

                <div
                  className={`transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  <label className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-violet-400 transition-colors duration-300 text-white placeholder-white/40 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className={`w-full sm:w-auto transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
