import React from 'react';
import styles from './title.module.css'
import Image from "next/image"



export function Title (props) {
  return (
    <div className={styles.container}>
      
       <video className={styles.video} autoPlay loop muted>
        <source src="/image/back.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>

        <div className={styles.image_flex}>
          <Image src="/image/title.png" alt="title logo" width={250} height={250} />
        </div>

        
        <div className={styles.flex_test_box}>
          <button className={styles.button} onClick={props.onClickStart1}>城に入る</button>
          <button className={styles.button} onClick={props.onClickStart2}>結果を見に行く</button>
        </div>
    </div>
    </div>

    
  );
};


