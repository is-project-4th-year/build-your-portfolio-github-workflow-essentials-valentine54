import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Tyne IT Company, Nairobi",
      duration: "January 2025 – March 2025",
      details: "Worked on web development projects, improving UI components and collaborating in Agile sprints."
    },
    {
      role: "Volunteer Caregiver",
      company: "Child Welfare Society of Kenya",
      duration: "Jan 2024 – March 2024",
      details: "Provided technical assistance and helped digitize administrative tasks for better efficiency."
    },
    {
      role: "Computer Science Student",
      company: "Strathmore University",
      duration: "2022 – Present",
      details: "Gained hands-on experience through academic projects in web dev, Android, cybersecurity, and network config."
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-purple-700">{exp.role}</h3>
              <p className="text-sm text-gray-600 italic">{exp.company} • {exp.duration}</p>
              <p className="mt-2 text-sm text-gray-700">{exp.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
