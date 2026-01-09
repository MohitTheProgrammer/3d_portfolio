import React from "react";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto sm:p-16 pb-12 pt-31.5! px-8 min-h-[calc(100vh-80px)]">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
        Hello, I'm{" "}
        <span className="bg-linear-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
          Mohit
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Developer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="font-semibold sm:text-3xl text-xl relative font-poppins">
          My Skills
        </h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => {
            return (
              <div key={skill.name} className="block-container w-20 h-20">
                <div className="btn-back rounded-xl"></div>
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="sm:text-5xl text-3xl font-semibold sm:leading-snug font-poppins">
          Work Experience
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Developer based in India, specializing in technical
            education through hands-on learning and building applications.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative max-w-5xl mx-auto py-20 ">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-white sm:-translate-x-1/2" />

            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`mb-16 flex w-full justify-start ${
                  i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div
                  className={`w-full sm:w-[45%] bg-white p-6 rounded-xl shadow-lg ml-10 sm:ml-0 ${exp.border}`}
                >
                  <div className="flex gap-4 justify-center items-center">
                    <img
                      src={exp.icon}
                      alt={exp.company_name}
                      className="w-20 h-20 object-contain"
                    />
                    <div>
                      <h3 className="font-semibold text-blue-400">
                        {exp.title}
                      </h3>
                      <p className="text-black font-medium font-base">
                        {exp.company_name} • {exp.date}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {exp.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-black font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
