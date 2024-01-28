import React from 'react';
import styles from "./faqSingle.module.css";
const FAQsingle = ({question, answer}) => {
    return (
        <div className={styles.container}>

            <p className={styles.question}>{question}</p>

            <p className={styles.answer}>
                {answer}
            </p>


        </div>
    );
};

export default FAQsingle;