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
import lexicon from '../assets/images/lexicon.jpg'
import skincare from '../assets/images/skincare.jpg'
import bulwark from '../assets/images/bulwark.jpg'
import timbu from '../assets/images/timbu.jpg'
import port from '../assets/images/port.png'


// Sample project data with unique images
const projects = [

  {
    id: 1,
    title: "Portfolio Website",
    description: "A Portfolio page built using React and Tailwind CSS.",
    image: port, // Unique Image
    link: "https://portfolio-1fll.vercel.app/",
  },
  {
    id: 2,
    title: "Skincare Landing Page",
    description: "A responsive landing page built with HTML and CSS.",
    image: skincare, // Unique Image
    link: "https://skincare-landing-page.vercel.app/",
    github:"https://github.com/Oyizaadewuyi/skincareLandingPage.git",
  },
  {
    id: 3,
    title: "Timbu (E-commerce Product Page)",
    description: "A product display page using React and Tailwind CSS.",
    image: timbu, // Unique Image
    link: "https://hng-timbu-shop.vercel.app/",
  },
  {
    id: 4,
    title: "Lexicon",
    description: "A Mini dictionary built using Html and Css with open API of Dictionary...",
    image: lexicon, // Unique Image
    link: "https://january-project.vercel.app/",
  },
  {
    id: 5,
    title: "Bulwark",
    description: "An Anti-virus website page built using React,tailwindCss and CSS. for Tech4dev fellowship capstone project...i built the navigation bars, Hero page and product page.",
    image: bulwark, // Unique Image
    link: "https://bluwark-project.vercel.app/",
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
    <section id="projects" className="bg-gradient-to-r from-gray-900 to-pink-600 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-500 hover:cyan">
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
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            variants={itemVariants}
          >
            {/* Display each project's unique image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-600 my-3">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 font-bold hover:underline"
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