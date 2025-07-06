import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';

const movies = [
  {
    title: 'Criminal Justice',
    image: require('../assets/criminal.webp'),
  },
  {
    title: 'Taazaa Khabar',
    image: require('../assets/taazakhabar.webp'),
  },
  {
    title: 'Ipl 2025',
    image: require('../assets/rcbfinal.webp'),
  },
  {
    title: 'Titanic',
    image: require('../assets/titanic.webp'),
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <section className="banner">
        <div className="banner-content">
          <h1>Unlimited Entertainment</h1>
          <p>Watch the latest Movies, TV shows, Web series & Live Sports</p>
          <button>Start Watching</button>
        </div>
      </section>

      <section className="movies-section">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
