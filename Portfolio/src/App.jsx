import React from 'react';
import useDarkMode from '@hooks/useDarkMode';
import Footer from '@components/Footer';
import Dock from '@components/Dock';
import { FcHome, FcContacts, FcPortraitMode, FcWorkflow, FcOpenedFolder } from "react-icons/fc";

import AboutSection from './components/Sections/About';
import HeroSection from './components/Sections/Hero';
import ContactSection from './components/Sections/Contact';
import SkillsSection from './components/Sections/Skill';
import ProjectsSection from './components/Sections/Project';

function App() {
  const [isDark, setIsDark] = useDarkMode();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { icon: <FcHome size={18} />, label: 'Home', onClick: () => scrollToSection('home') },
    { icon: <FcPortraitMode size={18} />, label: 'About', onClick: () => scrollToSection('about') },
    { icon: <FcWorkflow size={18} />, label: 'skills', onClick: () => scrollToSection('skills') },
    { icon: <FcOpenedFolder size={18} />, label: 'Projects', onClick: () => scrollToSection('projects') },
    { icon: <FcContacts size={18} />, label: 'Contact', onClick: () => scrollToSection('contact') },
  ];



  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white flex flex-col justify-between">

      {/* Main Section */}
      <main className="w-full max-w-6xl mx-auto px-4 pt-24 pb-36">
        {/* Add sections here: About, Skills, Projects, etc. */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Dock Menu */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center z-40">
        <Dock
          items={items}
          panelHeight={200}
          baseItemSize={40}
          magnification={60}
          className=" dark:bg-white/10 backdrop-blur-md border border-white/10 shadow-lg px-2 cursor-pointer rounded-lg"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
