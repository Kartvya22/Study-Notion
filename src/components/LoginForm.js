import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function logInHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing Log-in Data");
    console.log(formData);
    navigate("/dashboard");
  }

  return (
    <form
      action=""
      onSubmit={logInHandler}
      className="flex flex-col justify-center items-start gap-4 w-full max-w-[1160px]"
    >
      <label
        htmlFor="email"
        className="flex flex-col justify-center items-start gap-1 w-full"
      >
        <p className="text-slate-200">
          Email Address <sup className="text-red-600">*</sup>
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

      <label
        htmlFor="password"
        className="flex flex-col justify-center items-start gap-1 w-full"
      >
        <p className="text-slate-200">
          Password <sup className="text-red-600">*</sup>
        </p>

        <div className="relative w-full">
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={changeHandler}
            className="appearance-none py-2 pl-2 w-full rounded-md bg-gray-900 text-slate-200 border-b-[1px] border-gray-500"
          />

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2 right-3 text-2xl"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link
            to="#"
            className="flex justify-end items-center text-sm text-cyan-700 mt-1"
          >
            <p>Forgot Password</p>
          </Link>
        </div>
      </label>

      <button className="appearance-none text-center py-2 w-full rounded-md bg-yellow-400 text-black font-bold">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
