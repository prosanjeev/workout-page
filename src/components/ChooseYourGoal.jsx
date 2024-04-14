import React, { useState } from "react";

const ChooseYourGoal = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
  };

  const goalList = [
    {
      name: "Weight Loss",
    },
    {
      name: "Muscle Gain",
    },
    {
      name: "Flexibility and Mobility",
    },
    {
      name: "General Fitness",
    },
    {
      name: "Event - specific training",
    },
    {
      name: "Mindfulness and Mental Health",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card card-compact w-full sm:w-100 bg-base-100 flex flex-col  space-y-2 max-w-[480px] mx-auto">
          <h2 className="text-2xl mb-12 text-center font-bold font-montserrat">
            What are your goals?
          </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded px-4 pt-6 pb-1 mb-4"
        >

          <div className="flex-1  h-[66vh] font-montserrat">
            {goalList.map((goal, index) => (
              <div
                className="bg-gray-100 shadow-am rounded-lg p-2 mb-4"
                key={index}
              >
                <div className="form-control">
                  <label className="label cursor-pointer flex items-center">
                    <span className="label-text text-sm font-bold pl-2">{goal.name}</span>
                    <input
                      type="checkbox"
                      className="checkbox mr-2 checkbox-primary"
                    />
                  </label>
                </div>
              </div>
            ))}

            {/* <div className="mb-6">
              <input
                className="bg-gray-100 appearance-none border-none rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div> */}
          </div>
          <button
            className="bg-gradient-to-br hover:from-blue-700 hover:to-blue-900 text-white  font-montserrat py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full mb-4"
            type="submit"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChooseYourGoal;
