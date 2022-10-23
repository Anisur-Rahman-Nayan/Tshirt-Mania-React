import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to Tshirts Mania !!!</h2>
            <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/order'>Order Review</Link>
            </nav>
        </div>
    );
};

export default Header;