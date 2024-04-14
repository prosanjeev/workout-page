import React, { useState } from "react";
import { TiInfoOutline } from "react-icons/ti";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi";

const WorkoutTracker = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="card card-compact w-full sm:w-100 bg-base-100 flex flex-col  space-y-2 max-w-[410px] mx-auto ">
        <h2 className="text-2xl mb-12 text-center font-bold font-montserrat">
          What are your goals?
        </h2>

        <div className=" max-w-sm mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-300 to-white p-4 flex items-center  ">
            <div className="text-4xl ">
              <TiInfoOutline />
            </div>
            <p className="text-gray-800 ml-1">
              You've burned fewer calories than yesterday. Time to get moving!
            </p>
          </div>
        </div>
        <div className=" flex justify-between p-4 items-center">
          <div>
            <h2 className="text-xl font-bold">Upcoming Workout</h2>
          </div>
          <div>
            <p>See more</p>
          </div>
        </div>

        <div className=" w-96 mx-auto rounded-lg shadow-lg">
          <div className=" p-4 flex items-center justify-between ">
            <div className="flex items-center">
              <div className="text-4xl rounded-full border-black-2 p-1 bg-blue-100 ">
                <img
                  src="/Ellipse1.png"
                  alt="Ellipse1"
                  height="50"
                  width="50"
                />
              </div>
              <div className="ml-3">
                <h2 className="text-gray-800 text-[17px] font-medium">
                  Full Body Workout
                </h2>
                <p className="text-[13px] text-gray-400 font-medium">
                  Today 3pm
                </p>
              </div>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
        </div>
        <div className=" w-96 mx-auto rounded-lg overflow-hidden shadow-lg mt-4">
          <div className=" p-4 flex items-center justify-between ">
            <div className="flex items-center">
              <div className="text-4xl rounded-full border-black-2 p-1 bg-blue-100 ">
                <img
                  src="/Ellipse2.png"
                  alt="Ellipse2"
                  height="50"
                  width="50"
                />
              </div>
              <div className="ml-3">
                <h2 className="text-gray-800 text-[17px] font-medium">
                  Upper Body Workout
                </h2>
                <p className="text-[13px] text-gray-400 font-medium">
                  4 Feb, 3:30 pm
                </p>
              </div>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
        </div>

        <div class="font-bold text-xl flex justify-start p-5 ">
          What Do You Want to Train
        </div>

        <div class="w-96 mx-auto  rounded-lg overflow-hidden shadow-lg bg-blue-300">
          <div class="flex justify-between px-6 py-4">
            <div class="text-left">
              <p class="text-gray-700 text-base font-semibold">Full Body Workout</p>
              <p class="text-gray-700 text-[12px] font-semibold">Arms </p>
              <p class="text-gray-700 text-[12px] font-semibold">Chest </p>
            </div>
            <img
              class="h-[100px]"
              src="/Ellipse3.png"
              alt="Sunset in the mountains"
            />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-between items-center py-6 px-6 max-w-[410px] mx-auto">
          <div className="flex space-x-10">
            <AiOutlineHome className="text-gray-500 hover:text-gray-900 text-[34px]" />
            <IoImageOutline className="text-gray-500 hover:text-gray-900 text-[34px]" />
          </div>
          <img
            src="search.png"
            alt="Icon"
            className="absolute top-[] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20"
          />

          <div className="flex space-x-10">
            <HiOutlineCamera className="text-gray-500 hover:text-gray-900 text-[34px]" />
            <AiOutlineUser className="text-gray-500 hover:text-gray-900 text-[34px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTracker;
