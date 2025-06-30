import React from 'react';

export default function Skills() {
  const skillGroups = {
    "Programming Languages": ["Python/Dj", "JavaScript", , "Kotlin"],
    "Web Development": ["HTML", "CSS", "React", "Tailwind CSS", "Django", "Vite"],
    // "Mobile Development": ["Kotlin", "Jetpack Compose", "Android Studio"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Figma", "Firebase"],
    "Others": ["Network Configuration", "Cybersecurity", "Version Control"]
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillGroups).map(([category, skills], index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{category}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
