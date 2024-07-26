import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS styles
import Image from 'next/image';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <header className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 text-white p-6 text-center h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">Mohanish Lalwani</h1>
        <h2 className="text-4xl font-bold mb-2" data-aos="fade-up">Frontend Developer</h2>
        <p className="text-lg mb-2" data-aos="fade-down">I design and develop services for customers</p>
        <p className="text-lg mb-4" data-aos="fade-up">I'm passionate about building excellent software that improves the lives of those around me.</p>
        <p className="text-lg mb-6" data-aos="fade-down">Let's work together!</p>
        
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a href="https://github.com/Mohanish70" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-up">GitHub</a>
          <a href="https://www.linkedin.com/in/mohanish-lalwani-31959b162/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-down">LinkedIn</a>
          <a href="https://twitter.com/mohanishlalwani" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-up">Twitter</a>
          <a href="https://instagram.com/mohanishlalwani" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-down">Instagram</a>
          <a href="mailto:mohanishlalwani@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-up">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline" data-aos="fade-down">Resume</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
