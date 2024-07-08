'use client'
import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { useState } from 'react'
import LoginPopup from './components/Login/Login.jsx'
import Header from './components/Header/Header.jsx'
import ExploreMenu from './components/ExploreMenu/ExploreMenu.jsx'
import FoodDisplay from './components/FoodDisplay/FoodDisplay.jsx'
import StoreContextProvider from './context/StoreContext.jsx'
import Footer from './components/Footer/Footer.jsx'

const page = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [category, setCategory] = useState("All");
  return (
    <StoreContextProvider>
      <div>
        <Navbar setShowLogin={setShowLogin} />
        {showLogin&&<LoginPopup setShowLogin={setShowLogin}/>}
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <Footer />
      </div>
    </StoreContextProvider>
    
  )
}

export default page