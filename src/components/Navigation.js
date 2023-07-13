import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css";

const Navigation = () => {
  return (
        <div className='menu'>
            {/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <button>LogIn/Register</button>
            </ul> */}

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <button>LogIn/Register</button>
            </ul>
        </div>
  )
}

export default Navigation