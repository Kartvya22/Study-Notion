import React from 'react'
import Template from '../components/Template'
import SignupImg from "../asset/signup.png"

function Signup({setIsLoggedIn}) {
  return (
    <div>
      <Template
          title={"Join the millions learning to code with StudyNotion for free"}
          desc1={"Build skills for today, tommorrow, and beyond."}
          desc2={"Education to future-proof your career."}
          image={SignupImg}
          formType={"signup"}
          setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup