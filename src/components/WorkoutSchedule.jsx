import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { HiOutlineCamera } from "react-icons/hi";

const WorkoutSchedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(new Date().getDate()); // Set selectedDay to the current day

  const workouts = [
    { name: "Ab Workout", time: "7:30 AM" },
    { name: "Upperbody Workout", time: "9:00 AM" },
    { name: "Lowerbody Workout", time: "3:00 PM" },
    { name: "Lowerbody Workout", time: "11:30 PM" },
  ];

  const currentYear = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, index) => {
    const monthIndex = index;
    const monthLabel = new Date(currentYear, index, 1).toLocaleString(
      "default",
      { month: "short" }
    );
    return { value: monthIndex, label: `${monthLabel} ${currentYear} ` };
  });

  const daysInMonth = new Date(
    selectedMonth.getFullYear(),
    selectedMonth.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, index) => {
    const dayNumber = index + 1;
    const dayDate = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth(),
      dayNumber
    );
    const dayLabel = dayDate.toLocaleString("default", { weekday: "short" });
    return { number: dayNumber, label: dayLabel };
  });

  const times = Array.from({ length: 24 }, (_, index) => {
    const hour = index % 12 || 12;
    const period = index < 12 ? "AM" : "PM";
    return `${hour}:00 ${period}`;
  });

  const canvasRef = useRef(null);
  const currentMinuteRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const updateCurrentTime = () => {
      if (currentMinuteRef.current && currentMinuteRef.current.parentElement) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const currentIndex = now.getHours();
        const scrollPosition = currentIndex * 40; // Scroll to show the current hour
        currentMinuteRef.current.parentElement.scrollLeft = scrollPosition;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo((parseInt(hours) + parseInt(minutes) / 60) * 40, 0);
        ctx.lineTo(
          (parseInt(hours) + parseInt(minutes) / 60) * 40,
          canvas.height
        );
        ctx.strokeStyle = "blue";
        ctx.stroke();
      }
    };

    const intervalId = setInterval(updateCurrentTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentDay = new Date().getDate();
    const daysInMonth = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth() + 1,
      0
    ).getDate();
    const centerIndex = Math.floor(daysInMonth / 2);

    if (currentDay > centerIndex) {
      setSelectedDay(centerIndex + 1); // Adjust index to start from 1
    } else {
      setSelectedDay(currentDay);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrevMonth = () => {
    const newMonth = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth() - 1,
      1
    );
    setSelectedMonth(newMonth);
    setSelectedDay(new Date().getDate()); // Set selectedDay to the current day
  };

  const handleNextMonth = () => {
    const newMonth = new Date(
      selectedMonth.getFullYear(),
      selectedMonth.getMonth() + 1,
      1
    );
    setSelectedMonth(newMonth);
    setSelectedDay(new Date().getDate()); // Set selectedDay to the current day
  };

  const getWorkoutsForHour = (hour) => {
    const selectedTime = new Date();
    selectedTime.setHours(hour);
    selectedTime.setMinutes(0);

    const endHour = new Date(selectedTime);
    endHour.setHours(endHour.getHours() + 1);

    return workouts.filter((workout) => {
      const [workoutHour, workoutMinute] = workout.time.split(":");
      const isPM = workout.time.toLowerCase().includes("pm");
      const hourOffset = isPM ? 12 : 0;

      const workoutStart = new Date(selectedTime);
      workoutStart.setHours(parseInt(workoutHour) + hourOffset);
      workoutStart.setMinutes(parseInt(workoutMinute));

      const workoutEnd = new Date(workoutStart);
      workoutEnd.setHours(workoutEnd.getHours() + 1);

      return workoutStart >= selectedTime && workoutStart < endHour;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card card-compact w-full sm:w-100 bg-base-100 flex flex-col space-y-2 max-w-[410px] mx-auto">
        <div className="flex items-center justify-left mb-12 ml-4 space-x-16">
          <div className="bg-gray-100 p-1 text-[18px]">
            <FaChevronLeft />
          </div>
          <h2 className="text-[20px] text-center font-semibold font-montserrat">
            Workout Schedule
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div className="bg-white p-4 rounded">
              <div className="flex space-x-2 items-center justify-center mb-4 text-md ">
                <button onClick={handlePrevMonth}>
                  <FaChevronLeft />
                </button>
                <h2 className="text-md font-semibold">
                  {months[selectedMonth.getMonth()].label}
                </h2>
                <button onClick={handleNextMonth}>
                  <FaChevronRight />
                </button>
              </div>
              <div className="flex overflow-x-scroll relative mb-8 gap-4 pr-4 h-[100px] py-2">
                {days.map((day) => (
                  <div
                    key={day.number}
                    className={`py-2 px-6 cursor-pointer inline-block rounded-md shadow-md text-center font-semibold ${
                      startDate.getDate() === day.number ||
                      selectedDay === day.number
                        ? "text-white bg-gradient-to-br from-blue-400 to-blue-600"
                        : "text-gray-800 bg-white"
                    }`}
                    onClick={() => {
                      setStartDate(
                        new Date(
                          selectedMonth.getFullYear(),
                          selectedMonth.getMonth(),
                          day.number
                        )
                      );
                      setSelectedDay(day.number);
                    }}
                  >
                    <div className="text-sm">{day.label}</div>{" "}
                    <div className="text-[28px]">{day.number}</div>
                  </div>
                ))}
                <canvas
                  ref={canvasRef}
                  className="absolute top-0 bottom-0 left-0 right-0"
                />
              </div>

              <div className="overflow-y-scroll max-h-[500px]">
                <ul className="text-left">
                  {times.map((time, index) => (
                    <li key={time} className="relative">
                      <div className="flex justify-between">
                        <span>{time}</span>
                        <ul>
                          {getWorkoutsForHour(index).length > 0 &&
                            getWorkoutsForHour(index).map((workout) => (
                              <li
                                key={workout.name}
                                className="bg-gray-100 rounded px-2 "
                                style={{
                                  position: "absolute",
                                  left: 130,
                                  top: `${
                                    (parseInt(workout.time.split(":")[1]) /
                                      60) *
                                    100
                                  }%`,
                                  width: "65%",
                                }}
                              >
                                {workout.name} - {workout.time}
                              </li>
                            ))}
                        </ul>
                      </div>
                      {index < times.length - 1 && (
                        <div className="h-px bg-gray-300 my-1" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Add more days */}
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

export default WorkoutSchedule;
