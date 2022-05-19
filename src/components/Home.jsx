import React from "react";
import SocialIcon from "./SocialIcon";
import triangle from "../images/Triangle.svg";
import arrow from "../images/arrow.svg";
import boy from "../images/boy.svg";

const Home = () => {
  return (
        <>
            <div className="grid lg:grid-cols-12 md:px-28 sm:px-20 px-12 lg:px-0">
                <div className="grid grid-cols-1 lg:col-start-2 lg:col-span-5 lg:mr-10">
                    {/* <div className=" sm:h-0 lg:h-20 h-20 bg-red-200">
                        <img
                            src={triangle}
                            alt="triangle"
                            className="float-right animate-spin-slow"
                        />
                    </div> */}
                    <div className="flex justify-around">
                        <img src={boy} alt="boy" className="hidden sm:block lg:hidden my-10 sm:h-72 md:h-80"/>
                    </div>

                    <div>
                        <div className="lg:text-6xl text-5xl font-roboto font-bold sm:pt-0 lg:pt-20 pt-20">
                            I'm Motilal.
                        </div>
                        <div className="text-[rgb(47,46,65)] text-[18px] text-justify md:text-lg font-poppins h-auto pt-4 pb-5">
                            “An amateur software developer who is always in search of magic”
                            This line says exactly who I am. I am a enthuasiastic software
                            developer who crafts beautiful websites, some time builds ML
                            models, and in free time spends maximum of my time in finding
                            solutions for real world problems.
                        </div>
                        
                        <div className="grid sm:grid-cols-2 text-[20px] md:text-xl font-poppins sm:gap-x-4 gap-y-4 lg:mr-20">
                            <button className="bg-[rgb(47,46,65)] hover:bg-[rgb(108,99,255)] border-[rgb(47,46,65)] hover:border-[rgb(108,99,255)] text-white border-[3px] duration-500 h-14 ">
                                Resume
                            </button>
                            <button className="border-[rgb(47,46,65)] hover:border-[rgb(108,99,255)] border-[3.4px] duration-500 h-14">
                                Hire me
                            </button>
                        </div>
                        <div className="flex justify-center mt-9">
                            <img src={arrow} alt="arrow" className="animate-bounce-right" />
                        </div>
                    </div>
                    <SocialIcon/>
                </div>
                {/* right column */}
                <div className="hidden lg:block lg:col-span-6">
                <img src={boy} alt="boy" className="lg:block pt-10"/>
                </div>
            </div>
        </>
    );
};

export default Home;