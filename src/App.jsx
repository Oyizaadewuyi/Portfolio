import React from "react";
import Navbar from "./components/Navbar";

import AboutSection from "./components/AboutSection";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutSection/>
      <Projects/>
      <Contact/>
      <Footer/>


     

    </div>
  )
}

export default App;