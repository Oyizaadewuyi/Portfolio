import React from "react";
import mypic from "../assets/images/mypic.jpg"

const Home = () => {
  return (
    <section className="h-screen flex items-center px-8 md:px-16 lg:px-24 bg-gradient-to-r from-gray-900 to-gray-600 md:flex-row">
      <div className="w-full text-center lg:text-left">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-200">Adewuyi Raihanat</h1>
      <p className="text-3xl md:text-4xl font-bold text-cyan-900 mt-4">Frontend Web Developer</p> 
      <h4 className="text-2xl md:3xl text-gray-200">I build website with Focus on Responsiveness <br />and Accessibility</h4> <br />
      <a href="#projects" className="mt-5 px-6 py-3 bg-cyan-900 text-white rounded-lg hover:bg-cyan-500">
        Projects
      </a>
      </div>
       <div className="w-full lg:w-1/2 mt-8 lg:mt-32">
      <img src={mypic} 
      alt="myimage"
      className="w-full h-auto object-cover rounded-lg" />
      <br />
      <br />
      <br />
      </div> 
    </section>
    
  );
};

export default Home;