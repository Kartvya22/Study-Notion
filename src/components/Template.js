import React from "react";
import frameImage from "../asset/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div className="flex justify-between items-center w-3/4 max-w-[1160px] mx-auto  pt-12 gap-x-12 gap-y-0">
      <div className="flex flex-col justify-start items-start gap-2 ml-2 text-white w-[37%] ">
        <h1 className="flex justify-start items-start text-white text-[1.725rem] font-semibold  text-left">{title}</h1>
        {/* <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p> */}
        <div>
          <div className="text-slate-300 tracking-wide">{desc1}</div>
          <div className="flex items-start text-cyan-600 tracking-wide italic">{desc2}</div>
        </div>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex justify-center items-center gap-2 w-full">
          <div className="h-[1px] w-full  bg-slate-600 "></div>
          <p className="text-slate-600 font-medium">OR</p>
          <div className="h-[1px] w-full  bg-slate-600 "></div>
        </div>
        <button className="text-slate-300 py-2  w-full border-slate-600 border-[1px] rounded-md text-center">
          <p className="flex justify-center items-center gap-2"><FcGoogle className="t text-lg"/> Sign in with Google</p>
        </button>
      </div>
      <div>
        <div className="relative w-full max-w-[450px] overflow-hidden">
          <img
            src={frameImage}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
            // className="scale-[0.8]"
          />

          <img
            src={image}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute top-[-10px] left-[-10px] rounded-sm overflow-hidden hover:scale-[1.1] transition-all duration-[1.5s]"
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
