import React from "react";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
  // const {name} = project
  console.log(project);
  return (
    <div className="container mx-auto my-8">
      <h2 className="md:text-4xl text-xl text-center py-8 font-semibold text-white">
        {" "}
        My Project
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mx-2">
        {project?.map((project) => (
          <div key={project.id}>
            <div className="border" data-aos="zoom-out-up">
              <div className="h-60">
                <img
                  src={project.picture}
                  className=" object-cover justify-center items-center h-full w-full"
                  alt=""
                />
              </div>
              <h1 className="text-2xl py-4 px-2 text-white">{project.name}</h1>
              <div className="lg:flex items-center">
                <h4 className="text-xl px-2">Feature</h4>
                {project?.feature.map((feature, i) => (
                  <div key={i}>
                    <div className="px-2">{feature}</div>
                  </div>
                ))}
              </div>
              <Link to={`/projectDetails/${project.id}`}><button className="btn btn-outline m-2" >Details</button></Link>
              <a href={project.live_site} target="_blank" className="btn btn-outline">Live Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
