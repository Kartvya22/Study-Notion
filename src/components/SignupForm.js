import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";

function SignupForm({ setIsLoggedIn }) {

  const [accountType, setAccountType] = useState("student");
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function signUpHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    const finalData = {
        ...accountData,
        accountType
    }
    console.log("Printing Final Data")
    console.log(finalData)
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-1 ">
      {/* student and instuctor  */}
      <div className="flex justify-center items-center gap-2 bg-gray-900 py-2  px-2 rounded-full ">
        <button
          className={`${
            accountType === "student"
              ? "bg-black text-white "
              : "bg-transparent text-slate-400"
          } py-1 px-3 rounded-full transtion-all duration-100`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-black text-white "
              : "bg-transparent text-slate-400"
          } py-1 px-3 rounded-full transtion-all duration-100`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        action=""
        onSubmit={signUpHandler}
        className="flex flex-col justify-center items-start gap-2 w-full max-w-[1160px]"
      >
        {/* firstName and lastName */}
        <div className="flex justify-center items-center gap-2 w-full">
          {/* firstName */}
          <label
            htmlFor="firstName"
            className="flex flex-col justify-center items-start gap-1 w-full"
          >
            <p className="text-slate-200">
              First Name <span className="text-red-700">*</span>{" "}
            </p>
            <input
              required
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
            />
          </label>

          {/* lastName */}
          <label
            htmlFor="lastName"
            className="flex flex-col justify-center items-start gap-1 w-full"
          >
            <p>
              Last Name <span className="text-red-700">*</span>{" "}
            </p>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
            />
          </label>
        </div>

        {/* Email */}
        <label
          htmlFor="email"
          className="flex flex-col justify-center items-start gap-1 w-full"
        >
          <p>
            Email Address <sup className="text-red-700">*</sup>
          </p>

          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            value={formData.email}
            onChange={changeHandler}
            className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
          />
        </label>

        {/* password */}
        <div className="flex justify-center items-center gap-2 w-full">
          {/* create password */}
          <label
            htmlFor="password"
            className="flex flex-col justify-center items-start gap-1 w-full"
          >
            <p>
              Create Password <sup className="text-red-700">*</sup>
            </p>

            <div className="relative w-full">
              <input
                required
                type={showCreatePassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={changeHandler}
                className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
              />

              <span
                onClick={() => setShowCreatePassword((prev) => !prev)}
                className="absolute top-2 right-3 text-2xl"
              >
                {showCreatePassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
          </label>

          {/* confirm password */}
          <label
            htmlFor="confirmPassword"
            className="flex flex-col justify-center items-start gap-1 w-full"
          >
            <p>
              Confirm Password <sup className="text-red-700">*</sup>
            </p>

            <div className="relative w-full">
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={changeHandler}
                className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
              />

              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute top-2 right-3 text-2xl"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </span>
            </div>
          </label>
        </div>

        <button className="appearance-none text-center py-2 w-full rounded-md bg-yellow-400 text-black font-bold mt-2">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
