import React from 'react';
import img from 'assets/images/test.webp';
import styles from './landing.module.css';

function Landing() {
  return (
    <section className={styles.container}>
      <h1 className={styles.gretting}>000님 안녕하세요.</h1>
      <div className={styles.selectTab}>
        <div className={styles.btn}>
          <img className={styles.icon} src={img} alt="icon" />
          <h2 className={styles.btnTitle}>Movie</h2>
        </div>
        <div className={styles.btn}>
          <img className={styles.icon} src={img} alt="icon" />
          <h2 className={styles.btnTitle}>Book</h2>
        </div>
        <div className={styles.btn}>
          <img className={styles.icon} src={img} alt="icon" />
          <h2 className={styles.btnTitle}>테마 추가</h2>
        </div>
      </div>
    </section>
  );
}

export default Landing;
