import Head from 'next/head';
import Header from '../src/components/Header';
import About from '../src/components/About';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Mohanish Lalwani Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="profile" className="text-center py-8 mt-16">
        <img src="/profile.jpg" alt="Mohanish Lalwani" className="rounded-full w-32 h-32 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Mohanish Ashok Lalwani</h1>
        <p className="text-lg mb-8">Frontend Developer</p>
        <p className="text-gray-700 mb-8">I'm a frontend developer with experience in building responsive and user-friendly web applications using React, Next.js, and Tailwind CSS.</p>
        <p className="text-gray-700 mb-8">I'm currently working on a project called "Mohanish's Portfolio" to showcase my skills and experience.</p>
        <p className="text-gray-700 mb-8">I'm also interested in learning new technologies and frameworks to improve my skills as a developer.</p>
        <p className="text-gray-700 mb-8">Feel free to contact me if you have any questions or if you're interested in working together.</p>
        <p className="text-gray-700 mb-8">Thank you for visiting my portfolio!</p>
        <div className="mt-8 flex flex-wrap justify-center space-x-4">
          <a href="https://github.com/mohanishlalwani" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mohanishlalwani" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/mohanishlalwani" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/mohanishlalwani" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:mohanishlalwani@gmail.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="/resume.pdf" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://www.fiverr.com/mohanishlalwani" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fiverr</a>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
