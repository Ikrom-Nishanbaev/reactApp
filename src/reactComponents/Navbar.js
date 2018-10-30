import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-4">
        <div className="container">
            <ul className="left">
                <li><NavLink to="/">Home</NavLink></li>                 
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>   
            </ul>
        </div>
        </nav>
    )
}

export default Navbar