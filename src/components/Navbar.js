import React from "react";
import Logo from "../asset/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


function Navbar(props) {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (

    <div className="flex justify-between items-center w-3/4 max-w-[1160px] mx-auto py-4 font-bold text-lg">
      <Link to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-slate-100 ">
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {
          !isLoggedIn &&
          <Link to="/login">
            <button className="a bg-slate-400 text-black py-[6px] px-[12px] rounded-[8px] border border-slate-500  focus:border-slate-50 focus:bg-slate-700 focus:text-white transition-all duration-300">Log-in</button>
          </Link>
        }
        {
          !isLoggedIn &&
          <Link to="/signup">
            <button className="a bg-slate-400 text-black py-[6px] px-[12px] rounded-[8px] border border-slate-500  focus:border-slate-50 focus:bg-slate-700 focus:text-white transition-all duration-300">Sign-up</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/">
            <button onClick={()=>{
              setIsLoggedIn(false)
              toast.success("Logged Out");
              }}
              className="a bg-slate-400 text-black py-[6px] px-[12px] rounded-[8px] border border-slate-500  focus:border-slate-50 focus:bg-slate-700 focus:text-white transition-all duration-300"
              >Log-out</button>
          </Link>
        }
        {
          isLoggedIn &&
          <Link to="/dashboard">
            <button className="a bg-slate-400 text-black py-[6px] px-[12px] rounded-[8px] border border-slate-500  focus:border-slate-50 focus:bg-slate-700 focus:text-white transition-all duration-300">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
}

export default Navbar;
