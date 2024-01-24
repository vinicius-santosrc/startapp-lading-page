import React, { useState, useEffect } from 'react';
import '../../style/header.css';
import LogoContent from '../../images/logo-content.webp'

const NavigationBar = () => {
    const [style, setStyle] = useState('transparent');

    useEffect(() => {
        const handleScroll = () => {
            setStyle(window.scrollY === 0 ? 'transparent' : 'black');
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ backgroundColor: style }} id="header" className="header-start-application">
            <div className="header-start-application-left-side">
                <h1>START</h1>
            </div>
            <div className="header-start-application-middle"></div>
            <div className="header-start-application-right-side">
                <button className='header-right-button-wrapper'>
                    <i className="fa-solid fa-square-plus"></i>
                    <span>COMECE HOJE</span>
                </button>
            </div>
        </header>
    );
};

export default NavigationBar;
