import React from 'react';

const projects = [
  { title: "Jura's Golden", image: 'heroimg.jpg', web_url: 'https://jurasgolden.ch', techno: 'React, Django' },
  { title: 'Neo Multifus', image: 'heroimg.jpg', techno: 'Python, Webapp pour le front-end' },
  { title: 'Albion Payout Discord Bot', image: 'heroimg.jpg', web_url: 'https://top.gg/bot/1223993597448294470', techno: 'Javascript, discord.js' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-12 text-gray-800">Mes projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group border rounded-lg overflow-hidden shadow-lg bg-gray-900 h-64 card-portfolio"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="relative p-6 flex flex-col justify-center items-center h-full text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              {project.techno && (
                <p className="text-sm mb-4">Technologies: {project.techno}</p>
              )}
              {project.web_url && (
                <a
                  href={project.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-300 hover:text-blue-500 font-medium"
                >
                  Visiter le site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
