import React, { useState, useEffect, useRef } from 'react';
import styles from './list.module.css';

function List() {
  const contentListRef = useRef();
  const [books, setBooks] = useState([]);

  const scrollingContent = type => {
    switch (type) {
      case 'prev':
        contentListRef.current.style.transform = 'translate(100%, 0)';
        break;
      case 'next':
        contentListRef.current.style.transform = 'translate(-100%, 0)';
        break;
      default:
        console.warn('input parameter');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/bookList.json')
      .then(res => res.json())
      .then(({ list }) => setBooks(list))
      .catch(new Error(''));
  }, []);

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
            <i className={`fas fa-angle-left ${styles.angle}`} />
          </div>
          <div ref={contentListRef} className={styles.contentList}>
            {books.map(book => (
              <li className={styles.content} key={book.id}>
                <img
                  className={styles.thumbnail}
                  src={book.thumbnail}
                  alt="book"
                />
                <div className={styles.bookDescription}>
                  <h2 className={styles.bookTitle}>{book.title}</h2>
                  <div className={styles.bookExplanation}>
                    <div className={styles.descriptionIcon}>
                      <i className="fas fa-user-alt" />
                    </div>
                    {book.author}
                  </div>
                  <div className={styles.bookExplanation}>
                    <div className={styles.descriptionIcon}>
                      <i className="fas fa-book-open" />
                    </div>
                    {book.description}
                  </div>
                  <div className={styles.bookExplanation}>
                    <div className={styles.descriptionIcon}>
                      <i className="fas fa-calendar-alt" />
                    </div>
                    {book.published}
                  </div>
                  <div className={styles.bookExplanation}>
                    <div className={styles.descriptionIcon}>
                      <i className="fas fa-calendar-check" />
                    </div>
                    {book.readDate}
                  </div>
                </div>
              </li>
            ))}
          </div>
          <div
            className={styles.nextBtn}
            onClick={() => scrollingContent('next')}
            aria-hidden
          >
            <i className={`fas fa-angle-right ${styles.angle}`} />
          </div>
        </ul>
      </section>
    </main>
  );
}

export default List;
