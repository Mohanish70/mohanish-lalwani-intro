const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '📦' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'Full Stack Development', icon: '💻' },
  { name: 'AI and Machine Learning', icon: '🤖' },
];

const Skills = () => (
  <section id="skills" className="p-6 bg-white text-center">
    <h2 className="text-4xl font-bold mb-8 text-primary">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map(skill => (
        <div
          key={skill.name}
          className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="text-5xl mb-2">{skill.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
