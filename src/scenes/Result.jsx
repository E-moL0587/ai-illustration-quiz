import React from 'react';
import styles from './Result.module.css'

export function Result  (props) {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source src="/image/abst.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}>

    <div>
    <h1>リザルト</h1>
    <br></br>

    <br></br>

    <h1>あなたの答え「{props.score}」は、</h1>
      <h1 style={{ fontSize: '40px', color: 'white' }}>
        {props.score === 'いぬ' ? <p>正解です！素晴らしい(^^♪</p> : <p>不正解です！残念(´；ω；`)ｳｩｩ</p>}
      </h1>

    <br></br>
    <br></br>

      <button className="intro__button" onClick={props.onClickStart}>
        <h1>タイトルに戻る</h1>
      </button>
    
    </div>
    </div>
    </div>
  );
};
