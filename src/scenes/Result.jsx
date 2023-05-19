import React from 'react';
import styles from './Result.module.css'

export function Result  (props) {
  return (
    <>
    <h1>リザルト</h1>
      <p>
        あなたのスコアは{props.score}
      </p>

      <button className="intro__button" onClick={props.onClickStart}>
        タイトルに戻る
      </button>

      
    </>
  );
};
