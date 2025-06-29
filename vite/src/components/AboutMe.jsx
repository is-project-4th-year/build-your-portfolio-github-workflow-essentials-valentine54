import React from "react";
import profileImage from "../assets/portfolio-image.jpg";

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 md:px-16 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-black/30 via-black/0 to-white/0 rounded-full blur-2xl -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/40 via-white/0 to-white/0 rounded-full blur-2xl -z-10" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
          Valentine <span className="block italic font-medium">Wanjiku<span className="text-black">.</span></span>
        </h1>

        {/* Image and quote */}
        <div className="relative mt-6">
          <img
            src={profileImage}
            alt="Valentine Wanjiku"
            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          />
          <div className="absolute top-1/2 left-full -translate-y-1/2 ml-4 bg-white px-4 py-2 rounded-full shadow-md flex items-center space-x-2 text-sm">
            <span className="text-purple-600 font-medium">Let's solve problems</span>
            <span className="text-gray-400">and create new ones</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mt-8 max-w-xl">
          Hello! My name is Valentine Wanjiku. I'm a passionate Computer Science student at Strathmore University in Nairobi, Kenya.<br />

I enjoy bringing ideas to life through clean, functional, and creative code. My interests lie in software development, web design, and cybersecurity. I'm also interested in learning more about DevOps. Whether I'm building web apps, solving bugs, or exploring UI/UX design, I’m always eager to learn and grow.
I enjoy bringing ideas to life through clean, functional, and creative code. My interests lie in software development, web design, and cybersecurity. <br />
Whether I'm building web apps, solving bugs, or exploring UI/UX design, I’m always eager to learn and grow.

I believe in the power of technology to make life beter and I’m excited to be part of the future that shapes it. Let’s build something meaningful together!

        </p>

        {/* Social icons */}
        <div className="flex space-x-4 mt-6">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">📷</button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">📘</button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">🔗</button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">✖️</button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">🏀</button>
        </div>

        {/* Contact Me button */}
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">
          Contact me
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
