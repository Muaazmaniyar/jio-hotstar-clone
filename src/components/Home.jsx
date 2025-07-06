import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

      <section className="trending-section">
        <h2>🔥 Trending Now</h2>
        <Slider {...sliderSettings}>
          {trending.map((movie, index) => (
            <div key={index} className="trending-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

const trending = [
  { title: 'Extraction 2', image: require('../assets/extraction.webp') },
  { title: 'Bhool Bhulaiyaa 2', image: require('../assets/bhoolbhulaiyya2.webp') },
  { title: 'Iron Man', image: require('../assets/iron.webp') },
  { title: 'Family Man', image: require('../assets/familyman.webp') },
];

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

export default Home;
