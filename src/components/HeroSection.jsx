import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center color-portfolio"
      style={{ backgroundImage: 'url("/heroimg.jpg")' }}
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold spotlight-portfolio">Bonjour, je suis Morgan</h1>
        <p className="mt-4 text-lg md:text-2xl spotlight-portfolio">Un développeur Web et d'applications</p>
        <a 
          href="/CV.pdf"
          download 
          className="mt-8 inline-block px-6 py-3 portfolio-btn rounded-full"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}
