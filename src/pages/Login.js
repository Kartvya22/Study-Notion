import React from 'react'
import Template from '../components/Template'
import loginImg from "../asset/login.png"
// import { Outlet } from 'react-router-dom'

function Login({setIsLoggedIn}) {
  return (
    <div>
      <Template
         title="Welcome Back"
         desc1="Build skills for today, tomorrow, and beyond."
         desc2="Education to future-proof your career."
         image={loginImg}
         formType="login"
         setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login