
import React from 'react';

export default function EducationSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>

        <div className="space-y-8">
          <div className="bg-white/5 border border-purple-500 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-300">Imperial Primary School</h3>
            <p className="text-gray-300">Primary Level | 2007 – 2017</p>
          </div>

          <div className="bg-white/5 border border-purple-500 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-300">Precious Blood Girls High School</h3>
            <p className="text-gray-300">Secondary Level | 2018 – 2022</p>
          </div>

          <div className="bg-white/5 border border-purple-500 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-300">Strathmore University</h3>
            <p className="text-gray-300">Bachelor of Science in Computer Science | 2022 – Present</p>
          </div>
        </div>
      </div>
    </section>
  );
}
