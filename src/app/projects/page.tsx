"use client";
import React, { useState } from "react";
import Image from "next/image";

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "uxui",
      image: "/images/port1.png",
      description: "Modern e-commerce interface with seamless user experience",
    },
    {
      id: 2,
      title: "Brand Identity",
      category: "graphic",
      image: "/images/port2.png",
      description: "Complete brand identity design for tech startup",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "uxui",
      image: "/images/port3.png",
      description: "Intuitive mobile banking application design",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "graphic",
      image: "/images/port4.png",
      description: "Creative social media graphics and campaign materials",
    },
    {
      id: 5,
      title: "Dashboard Design",
      category: "uxui",
      image: "/images/port5.png",
      description: "Analytics dashboard with data visualization",
    },
    {
      id: 6,
      title: "Packaging Design",
      category: "graphic",
      image: "/images/hero.jpg",
      description: "Product packaging and label design",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "uxui", label: "UX/UI Design" },
    { id: "graphic", label: "Graphic Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div id="projects" className="min-h-screen w-full relative">
      <div className="w-full max-w-[1500px] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative font-sans mx-auto text-white">
        {/* Background blur effects */}
        <div className="absolute -z-10 rounded-full blur-[140px] sm:blur-[180px] lg:blur-[240px] w-48 h-48 sm:w-64 sm:h-64 lg:w-[500px] lg:h-[500px] bg-pink-400/50 top-0 left-1/4" />
        <div className="absolute -z-10 rounded-full blur-[100px] sm:blur-[140px] lg:blur-[200px] w-40 h-40 sm:w-52 sm:h-52 lg:w-[400px] lg:h-[400px] bg-violet-400/60 top-1/3 right-0" />

        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            My <span className="text-violet-400">Projects</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Explore my latest work in UX/UI and graphic design. Each project
            represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-violet-400 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60">
                  {project.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-600/90 via-pink-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-2 border-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="w-full sm:w-auto">View All Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
