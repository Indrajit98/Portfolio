import React from "react";
import { useLoaderData } from "react-router-dom";
import img from "../assets/img/Indrajit.png";
import Project from "./Project";

const Home = () => {
    const project = useLoaderData();
    
  return (
    <div>
      <div className="container mx-auto md:flex justify-between items-center p-2">
        <div className="md:w-1/2">
          <h2 className="md:text-5xl text-xl font-semibold py-4">
            Hi, I am <span className="text-white">Indrajittchadnra Chanda</span>
          </h2>
          <p>
            I am Indrajittchandra chanda.I have a background in Computer Science
            and Engineering from the Leading University, Sylhet. And, I am
            interested to work with web development and in related fields. I am
            a lifetime learner. I spend my whole day, practically every day,
            experimenting with web technologies. Currently, I am learning
            REACT-JS.
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
      <Project project={project}></Project>
    </div>
  );
};

export default Home;
