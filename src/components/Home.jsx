import React from "react";
import raihan from "../assets/images/raihan.jpg"
import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section className="h-screen flex items-center px-8 md:px-16 lg:px-24 bg-gradient-to-r from-gray-900 to-pink-600 md:flex-row">
//       <div className="w-full text-center lg:text-left">
//       <h1 className="text-2xl md:text-6xl  font-bold text-gray-200">Adewuyi Raihanat</h1>
//       <p className="text-2xl md:text-4xl font-bold text-cyan-900 mt-4">Frontend Web Developer</p> 
//       <h6 className="text-2xl  text-gray-200">I build website with Focus on Responsiveness <br />and Accessibility</h6> <br />
//       <a href="#projects" className="mt-5 px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-500">
//         Projects
//       </a>
//       </div>
//        <div className="w-full lg:w-1/2 mt-8 lg:mt-32">
//       <img src={mypic} 
//       alt="myimage"
//       className="w-full h-auto object-cover rounded-lg" />
//       <br />
//       <br />
//       <br />
//       </div> 
//     </section>
    
//   );
// };

// export default Home;





const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8 },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, duration: 1 },
  },
};

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-pink-600 text-white py-12 px-6">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start"
        initial="hidden"
        animate="visible"
      >
        
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-3xl md:text-4xl font-bold"
            variants={textVariants}
            custom={0.5} // Delay for heading
          >
            <br />
            <br />
            Adewuyi Raihanat
          </motion.h1>
          <motion.h3
            className="mt-4 text-4xl text-cyan-700"
            variants={textVariants}
            custom={1} // Delay for paragraph
          >
            Frontend developer
          </motion.h3>

          <motion.p
            className="mt-4 text-lg"
            variants={textVariants}
            custom={1.5} // Delay for paragraph
          >
            I build website with Focus on Responsiveness <br />and Accessibility
          </motion.p>
<br />


          <a href="#projects" className="mt-5 px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700">
         Projects
       </a>
        </div>
      {/* Right Side - Image */}

        <motion.div
          className="md:w-1/2 mt-6 md:mt-0 flex justify-center"
          variants={imageVariants}
        >
         
          <img src={raihan} alt="Hero" className="w-full max-w-sm md:max-w-md" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;


