import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => (
  <div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl neo-brutalism-blue pt-4 pb-12 px-8">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3"
    >
      {btnText}
      <img src={arrow} alt="Arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="neo-brutalism-blue sm:text-xl sm:leading-snug text-center text-white px-8 py-4 mx-5">
      Hi, I am <span className="font-semibold">Mohit </span>👋
      <br />A Software Developer from India
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Frontend developer skilled in React, React Native, and Angular."
      }
      link="/about"
      btnText={"Learn More"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Early-career developer with strong hands-on project experience."
      }
      link="/projects"
      btnText={"vist my portfolio "}
    />
  ),
  4: (
    <InfoBox
      text={
        "need a project done or looking for a dev? I'm just a few keystrokes away"
      }
      link="/contact"
      btnText={"let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
