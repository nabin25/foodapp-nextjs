'use client'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react'
import LoginPopup from '../components/Login/Login'
import Cart from '../components/Cart/Cart'

const page = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
        <Navbar setShowLogin={setShowLogin}/>
        {showLogin&&<LoginPopup setShowLogin={setShowLogin}/>}
        <Cart/>
    </div>
  )
}
export default page;