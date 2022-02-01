import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './detail.module.css';

function Detail() {
  const bookImgRef = useRef();
  const bookDescription = useRef();
  const { book } = useLocation().state;

  const translateZ = () => {
    bookImgRef.current.style.transform = 'rotate3d(0, 1, 0, 180deg)';
    bookDescription.current.style.transform = 'rotate3d(0, 1, 0, -180deg)';
    bookDescription.current.style.opacity = 1;
  };

  return (
    <main className={styles.container}>
      <section className={styles.shortDescription}>
        <div
          className={styles.bookImg}
          ref={bookImgRef}
          onClick={translateZ}
          aria-hidden
        >
          <img className={styles.thumbnail} src={book.thumbnail} alt="book" />
          <article className={styles.descriptions} ref={bookDescription}>
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
        </div>
      </section>
    </main>
  );
}

export default Detail;
