import React from 'react';

export default function Skills() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'JQuery', 'React', 'Tailwind CSS','MYSql','Git']
  
    return (
      <section id="skills" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white text-gray-800 rounded-full px-4 py-2 text-sm font-semibold shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  