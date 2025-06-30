import React from 'react';

const projects = [
  {
    title: "Rafiki Dispensary Tool",
    description: "A web tool built to help manage dispensary workflows and patient data efficiently.",
    link: "https://github.com/valentine54/Rafiki-Dispensary-tool"
  },
  {
    title: "MediReminder App",
    description: "An Android app to help users manage and track their medication schedules using Jetpack Compose.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "This portfolio site you're viewing now—built with React, Vite, and Tailwind CSS to showcase my work and skills.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-12">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
