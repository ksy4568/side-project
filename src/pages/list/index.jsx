import React from 'react';
import styles from './list.module.css';

function List() {
  return (
    <main className={styles.container}>
      <section className={styles.recentContent}>
        <h1 className={styles.contentTitle}>최근에 본 책</h1>
        <ul className={styles.contentList}>
          <div className={styles.prevBtn}>btn</div>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <div className={styles.nextBtn}>btn</div>
        </ul>
      </section>
      <section className={styles.recentContent}>
        <h1 className={styles.contentTitle}>나만의 책 순위</h1>
        <ul className={styles.contentList}>
          <div className={styles.prevBtn}>btn</div>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <li className={styles.content}>00</li>
          <div className={styles.nextBtn}>btn</div>
        </ul>
      </section>
    </main>
  );
}

export default List;
