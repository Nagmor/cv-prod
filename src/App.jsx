import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import throttle from 'lodash/throttle';

export default function App() {
    const [currentSection, setCurrentSection] = useState(0); // Stocke l'index de la section active

    const sectionRefs = {
        home: useRef(null),
        about: useRef(null),
        skills: useRef(null),
        portfolio: useRef(null),
        contact: useRef(null),
    };

    const sections = Object.keys(sectionRefs); // Tableau des sections

    // Gérer le défilement avec un throttle
    const handleScroll = useCallback(
        throttle((e) => {
            const delta = Math.sign(e.deltaY); // Détecte la direction du défilement (1 pour bas, -1 pour haut)
            if (delta > 0 && currentSection < sections.length - 1) {
                setCurrentSection((prevSection) => Math.min(prevSection + 1, sections.length - 1));
            } else if (delta < 0 && currentSection > 0) {
                setCurrentSection((prevSection) => Math.max(prevSection - 1, 0));
            }
        }, 300),
        [currentSection]
    );

    // Ajouter l'écouteur d'événement de défilement
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="h-screen overflow-hidden">
            <Header activeSection={sections[currentSection]} />
            <div
                className="transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${currentSection * 100}vh)` }} // Déplace la vue en fonction de la section active
            >
                <div ref={sectionRefs.home} className="h-screen test">
                    <HeroSection />
                </div>
                <div ref={sectionRefs.about} className="h-screen">
                    <About />
                </div>
                <div ref={sectionRefs.skills} className="h-screen">
                    <Skills />
                </div>
                <div ref={sectionRefs.portfolio} className="h-screen">
                    <Portfolio />
                </div>
                <div ref={sectionRefs.contact} className="h-screen">
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    );
}
