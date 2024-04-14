import React from "react";
import { Link } from "react-router-dom";

const TrackGoal = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card card-compact w-full sm:w-100 bg-base-100 flex flex-col items-center space-y-16 max-w-[480px] mx-auto">
        <div className="flex justify-between w-full p-4">
          <Link
            to="/page2"
            className="ml-auto text-16 font-medium border-b-2 border-#9FB2FF text-#9FB2FF"
          >
            Skip
          </Link>
        </div>
        <figure>
          <img src="/image1.png" alt="Shoes" />
        </figure>
        <div className="card-body text-center space-y-20">
          <div className="space-y-4">
            <h2 className="card-title font-bold text-20">Track Your Goal</h2>
            <p className="text-16 font-semibold font-Montserrat text-#a19f9f text-left">
              Don’t worry if you have trouble determining your goals, We can
              help you determine your goals and track your goals
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to="/page2">
              <img
                src="/icon1.png"
                alt="Next Icon"
                height="60px"
                width="60px"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackGoal;
