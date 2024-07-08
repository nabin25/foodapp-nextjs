'use client'
import React from 'react'
import { useState } from 'react'
import { assets } from '@/public/assets/assets'
import './Login.css'
import Image from 'next/image'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState('Sign up')

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
               <h2>{ currState }</h2> 
               <Image className='login-cross-icon' onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
            </div>
            <div className="login-popup-inputs">
                {currState=='Login'?<></>:<input type="text" placeholder='Your name' required/>}
                <input type="email" placeholder='Email' required/>
                <input type="password" placeholder='Password' required/>
            </div>
            <button>{currState==="Sign up"?"Sign up":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>I agree to the terms and conditions</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }   
        </form>
        
    </div>
  )
}

export default LoginPopup