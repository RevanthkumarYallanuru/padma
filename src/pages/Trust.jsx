import React from "react";
import { assets } from "../assets/assets";
const Trust = () => {
  return (
    <div id="trust" className="mt-32 ">
      <div className="flex items-center justify-center">
        <img
          className="absolute hidden md:block md:left-40 lg:left-80"
          src={assets.small}
          alt=""
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-white">TRUST</h1>
          <h1 className="text-xl sm:text-3xl md:text-4xl text-primary">SLPP</h1>
          <img className="w-1/8 animate-pulse" src={assets.white} alt="" />
        </div>
      </div>

      <div className="hidden md:flex m-auto mt-24 mb-12 w-[90%] items-center flex-row md:flex-row justify-between  ">
        <img className="w-4/3  " src={assets.big} alt="" />
        <div className=" flex flex-col gap-32">
          {
            //inner one
          }
          <div className="flex items-center justify-center gap-5">
            <div className="text-white border-2 py-6 px-10 border-primary relative">
              <div className="bg-black p-6 text-center w-3/2 absolute top-[-50px]">
                <h1>Exploring Ancient Civilizations</h1>
              </div>

              <p>
                <b>Date :</b>January 10, 2025
              </p>
              <p>
                <b>Time :</b>10.00 AM - 04.00 AM
              </p>
              <p>
                <b>Loc :</b>Archaeological Museum, New York
              </p>
            </div>

            <div className="text-white text-sm font-thin w-1/4 ">
              <p className="font-thin">
                Join us for a day of exploration into the ancient civilizations
                of Egypt, Greece, and Rome.
              </p>
            </div>
          </div>


          <div className="flex items-center justify-center gap-5">
            <div className="text-white border-2 py-6 px-10 border-primary relative">
              <div className="bg-black p-6 text-center w-3/2 absolute top-[-50px]">
                <h1>Exploring Ancient Civilizations</h1>
              </div>

              <p>
                <b>Date :</b>January 10, 2025
              </p>
              <p>
                <b>Time :</b>10.00 AM - 04.00 AM
              </p>
              <p>
                <b>Loc :</b>Archaeological Museum, New York
              </p>
            </div>

            <div className="text-white text-sm font-thin w-1/4 ">
              <p className="font-thin">
                Join us for a day of exploration into the ancient civilizations
                of Egypt, Greece, and Rome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
