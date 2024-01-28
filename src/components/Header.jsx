import React from 'react';
import styles from './Header.module.css'; // Import as a module

const Header = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.header}>

            <div className={styles['header-left']}>
                {/* Your logo and text */}
                <img src="/LogoPNG.png" width={50} alt="logo" />
                <span style={{marginLeft:16, fontWeight:"bold", color:"#ffffff"}}>Bounty Wolf Pack</span>
            </div>
            <div className={styles['header-center']}>
                {/* Your buttons */}
                <button className={styles['button']} onClick={() => scrollToSection('Mint')}>Mint</button>
                <button className={styles['button']} onClick={() => scrollToSection('How')}>How To Mint</button>
                <button className={styles['button']} onClick={() => scrollToSection('Faq')}>FAQ</button>
            </div>
            <div className={styles['header-right']}>
                {/* Your whitepaper icon */}
                <img src="/Whitepaper.png" width={30} alt="whitepaper" />
            </div>
        </div>
    );
};

export default Header;
