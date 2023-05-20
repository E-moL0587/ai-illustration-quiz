import React, { useState, useEffect } from 'react';
import styles from './mode_select.module.css';

export function Mode_select({ onClickStart }) {
  const [countdown, setCountdown] = useState(false);
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    if (countdown && timer > 0) {
      const countdownTimer = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(countdownTimer);
    } else if (countdown && timer === 0) {
      setCountdown(false);
      onClickStart();
    }
  }, [countdown, timer, onClickStart]);

  const handleStartClick = () => {
    setCountdown(true);
  };

  return (
    <>
      <h1>モード選択</h1>

      <button className="intro__button" onClick={handleStartClick}>
      <h1>ランダム</h1>
      </button>

      {countdown && (
        <div className={styles.overlay}>
          <div className={styles.countdown}>
            <br></br>

            <h1 style={{ fontSize: '40px', color: 'white' }}>{timer}</h1>
          </div>
        </div>
      )}
    </>
  );
}
