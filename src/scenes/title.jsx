import React from 'react';
import styles from './title.module.css'
import Image from "next/image"



export function Title (props) {
  return (
    <div className={styles.container}>
        <div className={styles.image_flex}>
        <Image src="/image/title_image.png" alt="Vercel Logo" width={500} height={500} />
        </div>
        
        <div className={styles.flex_test_box}>
          <button className={styles.button} onClick={props.onClickStart1}>一人で遊ぶ</button>
          <button className={styles.button} onClick={props.onClickStart2}>二人で遊ぶ</button>
        </div>
    </div> 
    
  );
};


