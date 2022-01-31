import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './detail.module.css';

function Detail() {
  const { book } = useLocation().state;

  return (
    <main className={styles.container}>
      <section className={styles.shortDescription}>
        <div className={styles.bookImg}>
          <img className={styles.thumbnail} src={book.thumbnail} alt="book" />
        </div>
        <article className={styles.descriptions}>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>제목</h2>
            <p className={styles.cardDescription}>{book.title}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>저자</h2>
            <p className={styles.cardDescription}>{book.author}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>주제 분류</h2>
            <p className={styles.cardDescription}>{book.subject}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>출판일</h2>
            <p className={styles.cardDescription}>{book.published}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>읽은 날짜</h2>
            <p className={styles.cardDescription}>{book.readDate}</p>
          </div>
          <div className={styles.description}>
            <h2 className={styles.cardTitle}>나의 평점</h2>
            <p className={styles.cardDescription}>{book.score}</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Detail;
