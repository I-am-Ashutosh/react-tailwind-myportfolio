import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full mb-40 sm:mb-0 h-screen flex justify-center items-center bg-transparent"
    >
      <div className="max-w-fit mt-[10%] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#3f2c79] font-bold m-1 text-center">My abilities</p>
        <h1 className="text-4xl m-1 sm:text-4xl font-bold text-center text-[#ccd6f6]">
          My Experience
        </h1>
        <div className="flex flex-col p-10 pt-10 sm:p-0 w-full sm:w-[500px] lg:w-[700px] h-full sm:flex-row justify-between">
          <div className="stage-cube-cont mr-16">
            <h3 className="text-center mb-16 font-bold">Frontend</h3>
            <div className="cubespinner text-3xl">
              <div className="face1">HTML</div>
              <div className="face2">CSS</div>
              <div className="face3">JavaScript</div>
              <div className="face4">TypeScript</div>
              <div className="face5">React</div>
              <div className="face6">Redux</div>
            </div>
          </div>
          <div className="stage-cube-cont">
            <h3 className="text-center mt-20 sm:mt-0 mb-16 font-bold">Backend</h3>
            <div className="cubespinner text-3xl">
              <div className="face1">Node.JS</div>
              <div className="face2">Express</div>
              <div className="face3">RestAPI</div>
              <div className="face4">AWS</div>
              <div className="face5">JWT</div>
              <div className="face6">oAuth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
