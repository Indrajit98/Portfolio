import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../assets/img/Indrajit.png";
import Contact from "./Contact";
import Project from "./Project";

const Home = () => {
    const project = useLoaderData();
    
  return (
    <div>
      <div className="container mx-auto md:flex justify-between items-center p-2">
        <div className="md:w-1/2" data-aos="fade-right">
          <h2 className="md:text-5xl text-xl font-semibold py-4 text-center">
            Hi, I am <span className="text-white">Indrajittchandra Chanda</span> <br />
            <span className="text-2xl">Font-End Developer</span>
          </h2>
          {/* <p>
            I am Indrajittchandra chanda.I have a background in Computer Science
            and Engineering from the Leading University, Sylhet. And, I am
            interested to work with web development and in related fields. I am
            a lifetime learner. I spend my whole day, practically every day,
            experimenting with web technologies. Currently, I am learning
            REACT-JS.
          </p> */}
        </div>
        <div data-aos="fade-left">
          <img src={img} alt="" />
        </div>
      </div>
      <Project project={project}></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
