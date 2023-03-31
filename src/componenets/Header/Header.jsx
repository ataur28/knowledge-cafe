import React from 'react';
import './Header.css';
import profile from '../../images/profile pic.jpg'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;