import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-6 text-cyan-500 hover:text-cyan-800">
        Contact Me
      </h2>
     
      <p className="text-center text-lg mb-6">
        Feel free to connect with me on LinkedIn, check out my projects on GitHub, or send me an email.
      </p>

      <div className="flex justify-center space-x-6">
        
        <a
          href="https://www.linkedin.com/in/oyiza-raihanat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-3xl hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

        
        <a
          href="https://github.com/Oyizaadewuyi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 text-3xl hover:text-gray-600"
        >
          <FaGithub />
        </a>

        
        <a
          href="mailto:isahrihanna@gmail.com"
          className="text-cyan-500 text-3xl hover:text-cyan-800"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-center mt-4 text-gray-200">
        Or email me at: 
        <a href="mailto:isahrihanna@gmail.com" className="text-cyan-500 hover:underline">
          isahrihanna@gmail.com
        </a>
      </p>
      <br />
      <br />
      <br />
    </section>
  );
};

export default Contact;

