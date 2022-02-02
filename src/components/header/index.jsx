import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/images/test.webp';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <section className={styles.contents}>
        <Link to="/">
          <img className={styles.logoImg} src={logoImg} alt="logo" />
        </Link>

        <div className={styles.loginBtn}>로그인</div>
      </section>
    </header>
  );
}

export default React.memo(Header);
