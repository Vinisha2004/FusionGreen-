import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("Profile"); 
    return (
        <div className='navbar'>
            <div className='navbar-top'>
                <div className='logo'>
                    <img src={assets.logo} alt="Logo" />
                </div>
                <div className='search-bar'>
                    <img src={assets.search_icon} alt="Search Icon" className="search-icon" />
                    <div className="navbar-search-icon">
                        <img src={assets.basket_icon} alt="Basket Icon" />
                        <div className="dot"></div>
                    </div>
                </div>
                <button className='sign-in-button'>Sign In</button>
            </div>
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("Profile")} className={menu === "Profile" ? "active" : ""}>Profile</li>
                <li onClick={() => setMenu("Product")} className={menu === "Product" ? "active" : ""}>Products</li>
                <li onClick={() => setMenu("Media")} className={menu === "Media" ? "active" : ""}>Media</li>
                <li onClick={() => setMenu("Careers")} className={menu === "Careers" ? "active" : ""}>Careers</li>
                <li onClick={() => setMenu("Clients")} className={menu === "Clients" ? "active" : ""}>Clients</li>
                <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us</li>
            </ul>
        </div>
    );
};

export default Navbar;
