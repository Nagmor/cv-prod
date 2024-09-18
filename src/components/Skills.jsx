import React, { useEffect } from 'react';
import './css/Skills.css';
import { gsap } from 'gsap';

export default function Skills() {

  useEffect(() => {
    const cards = document.querySelectorAll('.card-effect');
    const gridContainer = document.querySelector('.grid-container');
    let lastRippleTime = 0;

    cards.forEach((card) => {

      card.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastRippleTime < 300) return;  // Limite à une vague toutes les 300 ms
        lastRippleTime = now;
        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Créer une nouvelle vague
        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        card.appendChild(ripple);

        gsap.set(ripple, {
          width: 0,
          height: 0,
          top: y,
          left: x,
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          position: 'absolute',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.01)',
          pointerEvents: 'none',
        });

        gsap.to(ripple, {
          duration: 1.5,
          width: size,
          height: size,
          opacity: 0,
          ease: 'power1.out',
          onComplete: () => ripple.remove(), // Supprimer le ripple après l'animation
        });
      });
    });
  }, []);

  return (
    <section id="skills" className="py-4 md:py-20 bg-gray-50 text-center h-screen">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Mes Compétences</h2>

      <div className="grid-container grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-4 sm:mx-auto grey-portfolio">

        {/* Langages de Programmation */}
        <div className="bg-portfolio p-6 rounded-lg shadow-md card-effect">
          <div className="ripple"></div>
          <h3 className="text-xl font-semibold mb-4 color-portfolio">Langages de Programmation</h3>
          <ul className="list-none space-y-2">
            <li>Python</li>
            <li>C/C++/C#</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frameworks & Outils */}
        <div className="bg-portfolio p-6 rounded-lg shadow-md card-effect">
          <div className="ripple"></div>
          <h3 className="text-xl font-semibold mb-4 color-portfolio">Frameworks & Outils</h3>
          <ul className="list-none space-y-2">
            <li>React</li>
            <li>Symfony</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        {/* Compétences en Informatique Pure */}
        <div className="bg-portfolio p-6 rounded-lg shadow-md card-effect">
          <div className="ripple"></div>
          <h3 className="text-xl font-semibold mb-4 color-portfolio">Informatique Pure</h3>
          <ul className="list-none space-y-2">
            <li>Helpdesk & Hotline</li>
            <li>Windows, MacOS, Linux</li>
            <li>Dépannage & Installation de Machines</li>
            <li>Gestion des Incidents & Ticketing</li>
            <li>Utilisation/Création de scripts</li>
          </ul>
        </div>

        {/* Design */}
        <div className="bg-portfolio p-6 rounded-lg shadow-md card-effect">
          <div className="ripple"></div>
          <h3 className="text-xl font-semibold mb-4 color-portfolio">Design</h3>
          <ul className="list-none space-y-2">
            <li>Mockup</li>
            <li>Front-end</li>
            <li>Photos</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
