// const projects = [

//   {
//     title: "Portfolio Website",
//     description: "My personal portfolio built with React and Tailwind CSS.",
//     link: "https://github.com/Oyizaadewuyi/my-portfolio.git",
//     github: "https://github.com/Oyizaadewuyi",
//   },

//   {
//     title: "Skincare landingPage",
//     description: "A Landing page for a Skincare brand built using Html and CSS.",
//     link: "https://skincare-landing-page.vercel.app/",
//     github: "https://github.com/Oyizaadewuyi/skincareLandingPage.git",
//   },

//   {
//     title: "Lexicon",
//     description: "A dictionary page built using Html and CSS.",
//     link: "https://january-project.vercel.app/",
//     github: "https://github.com/Oyizaadewuyi/January-project.git",
//   },
//   {
//     title: "Bulwark Website",
//     description: "An Anti-virus website page built using React,tailwindCss and CSS. for Tech4dev fellowship capstone project",
//     link: "https://Luminna.com",
//     github: "https://github.com/Oyizaadewuyi/timbushop",
//   },
//   {
//     title: "TimbuShop",
//     description: "An e-commerce site built with React and Tailwind CSS.",
//     link: "https://timbushop.com",
//     github: "https://github.com/Oyizaadewuyi/timbushop",
//   },
  
// ];
// const Projects = () => {
//   return (
//     <section className="bg-gray-900 py-12 px-6" id="projects">
//       <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 hover:text-cyan-800 lg:text-left">
//         My Projects
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//         {projects.map((project) => (
//           <div key={project.id} className="bg-gray-400 shadow-lg rounded-lg overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-56 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-gray-900">
//                 {project.title}
//               </h3>
//               <p className="text-gray-900 my-3">{project.description}</p>
//               <a
//                 href={project.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-cyan-800 font-bold hover:underline"
//               >
//                 View Project →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";

// Sample project data with unique images
const projects = [

  {
    id: 1,
    title: "Portfolio Website",
    description: "A Portfolio page built using React and Tailwind CSS.",
    image: "/images/ecommerce-page.png", // Unique Image
    link: "https://your-ecommerce-project-link.com",
  },
  {
    id: 2,
    title: "Skincare Landing Page",
    description: "A responsive landing page built with HTML and CSS.",
    image: "/images/skincare-landing.png", // Unique Image
    link: "https://skincare-landing-page.vercel.app/",
    github:"https://github.com/Oyizaadewuyi/skincareLandingPage.git",
  },
  {
    id: 3,
    title: "E-commerce Product Page",
    description: "A product display page using React and Tailwind CSS.",
    image: "/images/ecommerce-page.png", // Unique Image
    link: "https://your-ecommerce-project-link.com",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind CSS.",
    image: "/images/portfolio-project.png", // Unique Image
    link: "https://your-portfolio-link.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 }, // Delay each item by 0.5s
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
        My Projects
      </h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            {/* Display each project's unique image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 my-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 font-bold hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;