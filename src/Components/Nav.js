import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, handleshow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleshow(true);
            } else {
                handleshow(false);
            }
            return;
        });
        return () => window.removeEventListener();
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img
                className="nav-logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="logo"
            />
            <img
                className="nav-avatar"
                src="https://www.freepnglogos.com/uploads/doraemon-png/doraemon-character-free-download-8.png"
                alt="avatar"
            />
        </div>
    );
};

export default Nav;
