import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card card-compact w-full sm:w-100 bg-base-100 flex flex-col  space-y-2 max-w-[480px] mx-auto">
        <div>
          <h2 className="text-2xl mb-4 text-left font-bold font-montserrat pl-4 ">
            Create an account
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded px-4 pt-6 pb-1 mb-4"
        >
          <div className="flex-1 h-[50vh] font-montserrat">
            <div className="mb-6">
              <input
                className="bg-gray-100 appearance-none border-none rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none"
                id="firstName"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="bg-gray-100 appearance-none border-none rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none"
                id="lastName"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
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
            </div>
            <div className="mb-6">
              <input
                className="bg-gray-100 appearance-none border-none rounded-lg w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" className="checkbox mr-2" />
              <span className="text-sm">
                By proceeding, I agree to all{" "}
                <Link
                  to="/terms-and-conditions"
                  className="text-blue-500 hover:text-blue-800"
                >
                  T&C
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="text-blue-500 hover:text-blue-800"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
          <button
            className="bg-gradient-to-br hover:from-blue-700 hover:to-blue-900 text-white font-montserrat py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mb-4"
            type="submit"
          >
            Create an Account
          </button>
        </form>

        <div className="flex flex-col space-y-4">
          <div className="divider ">OR</div>

          <div className="flex items-center justify-center ">
            <div className="mr-2 p-2 border border-black rounded-lg">
              <img
                className="w-6 h-6"
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google icon"
              />
            </div>
            <div className="mr-2 p-2 border border-black rounded-lg">
              <img
                className="w-6 h-6"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-256.png"
                alt="Facebook icon"
              />
            </div>
          </div>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800" to="/page4">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
