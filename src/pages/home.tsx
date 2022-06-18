import React from "react";

const Home = () => {
  //#0a192f
  //#0b111e

  return (
    <div id="home" className="w-full h-screen bg-transparent">
      {/* Container */}
      <div className="max-w-fit mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#3f2c79] font-bold m-2 text-center">
          Hello, my name is
        </p>
        <h1 className="text-4xl m-5 sm:text-5xl font-bold text-center text-[#ccd6f6]">
          Ashutosh Singh
        </h1>
        <h2 className="text-3xl m-1 sm:text-3xl font-bold text-[#8892b0] text-center">
          I'm a Web Developer
        </h2>
        {/* <p className='text-[#8892b0] py-4 max-w-[700px] text-center'>
          I'm a mern-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive mern-stack web applications.
        </p> */}
        <div className="flex justify-center mt-4">
          <a href="#about">
            <button
              type="button"
              className="text-[#8892b0] border-[#8892b0] mr-7 border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:text-[#0b111e] hover:font-bold"
            >
              About me
            </button>
          </a>
          <a href="#contact">
            <button
              type="button"
              className="text-[#8892b0] border-[#8892b0] border-2 rounded-lg px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:text-[#0b111e] hover:font-bold"
            >
              Contact me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
