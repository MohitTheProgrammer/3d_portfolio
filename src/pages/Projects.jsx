import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 pt-31.5! px-8 min-h-[calc(100vh-80px)]">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        My{" "}
        <span className="bg-linear-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I build real-world applications using React, React Native, Angular,
          and Firebase, focusing on clean architecture, reusable components,
          performance optimization, and practical problem-solving through
          hands-on projects.”
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-100 w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={"project icon"}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-semibold">{project.name}</h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
