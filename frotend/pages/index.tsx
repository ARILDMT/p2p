import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ backgroundColor: '#121212', color: '#fff', padding: '10px' }}>
        <h1>LearnPeer</h1>
      </header>
      <main style={{ backgroundColor: '#fff', padding: '20px' }}>
        <h2>Добро пожаловать на платформу P2P-обучения</h2>
        <p>Авторизация, оценки, чат и многое другое!</p>
        <nav>
          <Link href="/login">
            <a>Войти</a>
          </Link>
          <span style={{ margin: '0 10px' }}>|</span>
          <Link href="/register">
            <a>Регистрация</a>
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default Home;