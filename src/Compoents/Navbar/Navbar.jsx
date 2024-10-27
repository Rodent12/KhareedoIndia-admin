import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import nav_profile from '../../assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>KhareedoIndia</p>
        </div>
        <img src={nav_profile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar