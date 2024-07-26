const projects = [
  { title: 'IDE Project', description: 'A full-featured IDE with folder structure and various file types.' },
  { title: 'Age Calculator', description: 'A web application to calculate age from date of birth.' },
  { title: 'Code Generator', description: 'A tool to generate code snippets for different programming languages.' },
];

const Projects = () => (
  <section id="projects" className="p-6 bg-gray-100 text-center">
    <h2 className="text-4xl font-bold mb-8 text-primary">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(project => (
        <div key={project.title} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
          <p className="text-lg text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
