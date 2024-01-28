import React from 'react';
import styles from './PackInfo.module.css'; // Importing CSS Module

const PackInfo = () => {
    return (
        <div className={styles.container}>


            <div style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <div className={styles.accessTitle}>
                    <img src="/LogoPNG.png" alt="Wolf Logo" className={styles.logo} />
                    <p >Holding BWP grants you:</p>
                </div>

                <div>
                    <ul className={styles.benefitsList}>
                        <li className={styles.benefit}><span className={styles.benefitsIcon}>🏦</span> Private NFT Hedge Fund</li>
                        <li className={styles.benefit}><span className={styles.benefitsIcon}>✅</span> DAO community (with actual Alphas)</li>
                        <li className={styles.benefit}><span className={styles.benefitsIcon}>💼</span> Share of trade revenue,</li>
    
                    </ul>
    
                    <ul className={styles.benefitsList}>
    
                        <li className={styles.benefit}><span className={styles.benefitsIcon}>🪂</span> Airdrop of our upcoming $WOLFIEs</li>
                        <li className={styles.benefit}><span className={styles.benefitsIcon}>🤖</span> Access to our trading bot (+Sniper)</li>
                    </ul>
                </div>
            </div>
            <p className={styles.description}>
                NFT collection of 555 Wolves hunting on Solana for bull runs.
            </p>
        </div>
    );
};

export default PackInfo;
