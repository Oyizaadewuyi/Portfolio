const projects = [

  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    link: "https://github.com/Oyizaadewuyi/my-portfolio.git",
    github: "https://github.com/Oyizaadewuyi",
  },

  {
    title: "Skincare landingPage",
    description: "A Landing page for a Skincare brand built using Html and CSS.",
    link: "https://skincare-landing-page.vercel.app/",
    github: "https://github.com/Oyizaadewuyi/skincareLandingPage.git",
  },

  {
    title: "Lexicon",
    description: "A dictionary page built using Html and CSS.",
    link: "https://january-project.vercel.app/",
    github: "https://github.com/Oyizaadewuyi/January-project.git",
  },
  {
    title: "Bulwark Website",
    description: "An Anti-virus website page built using React,tailwindCss and CSS. for Tech4dev fellowship capstone project",
    link: "https://Luminna.com",
    github: "https://github.com/Oyizaadewuyi/timbushop",
  },
  {
    title: "TimbuShop",
    description: "An e-commerce site built with React and Tailwind CSS.",
    link: "https://timbushop.com",
    github: "https://github.com/Oyizaadewuyi/timbushop",
  },
  
];
const Projects = () => {
  return (
    <section className="bg-gray-900 py-12 px-6" id="projects">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 hover:text-cyan-800 lg:text-left">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-900 my-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-800 font-bold hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;