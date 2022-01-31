import React, { useRef } from 'react';
import styles from './list.module.css';

function List() {
  const contentListRef = useRef();

  const scrollingContent = type => {
    switch (type) {
      case 'prev':
        contentListRef.current.style.transform = 'translate(-100%, 0)';
        break;
      case 'next':
        contentListRef.current.style.transform = 'translate(100%, 0)';
        break;
      default:
        console.warn('input parameter');
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.recentContent}>
        <h1 className={styles.contentTitle}>최근에 본 책</h1>
        <ul className={styles.slider}>
          <div
            className={styles.prevBtn}
            onClick={() => scrollingContent('prev')}
            aria-hidden
          >
            btn
          </div>
          <div ref={contentListRef} className={styles.contentList}>
            <li className={styles.content}>01</li>
            <li className={styles.content}>02</li>
            <li className={styles.content}>03</li>
            <li className={styles.content}>04</li>
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
          </div>
          <div
            className={styles.nextBtn}
            onClick={() => scrollingContent('next')}
            aria-hidden
          >
            hello
          </div>
        </ul>
      </section>
    </main>
  );
}

export default List;
