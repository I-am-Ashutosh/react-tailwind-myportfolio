import React from "react";
import {GiRibbonShield} from 'react-icons/gi';
import {HiOutlineBriefcase} from 'react-icons/hi';
import {BiSupport} from 'react-icons/bi';

const About = () => {
  const cardsData = [
      {
          label: 'Experience',
          icon: GiRibbonShield,
          description: '3+ Years'
      },
      {
        label: 'Completed',
        icon: HiOutlineBriefcase,
        description: '3+ Projects'
    },
    {
        label: 'Support',
        icon: BiSupport,
        description: 'Online 24/7'
    }
  ];

  return (
    <div id="about" className="w-full h-screen bg-transparent">
      <div className="max-w-fit shrink mx-auto px-4 sm:px-8 flex flex-col justify-center h-full">
        <p className="text-[#3f2c79] font-bold m-1 text-center">
          My Intro
        </p>
        <h1 className="text-4xl m-1 sm:text-4xl font-bold text-center text-[#ccd6f6]">
          About Me
        </h1>
        <div className='flex justify-center mt-4 p-5'>
            {
                cardsData.map((card,i) => (
                    <div key={i} className="flex flex-col justify-center items-center rounded-xl ml-4 p-10 first:ml-0 w-2/6 h-25 sm:w-52 sm:h-36 bg-[#191D2B]">
                        <div className="p-2 text-center">{<card.icon />}</div>
                        <div className="p-1 text-sm sm:text-md font-bold">{card.label}</div>
                        <div className="p-1 text-sm">{card.description}</div>
                    </div>
                ))
            }
        </div>
        <p className='flex shrink p-2 mt-6 text-[#8892b0] w-full sm:w-[600px]'>
          I'm a web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive web applications using React, Node and AWS.
        </p>
        <a href="#contact">
          <button type='button' className='mt-8 border-[#8892b0] border-2 rounded-lg px-6 py-3 my-2 flex items-center bg-[#8892b0] text-[#0b111e] hover:font-bold'>
            Contact me
          </button>
          </a>
      </div>
    </div>
  );
};

export default About;
