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
    URL: 'https://www.hotstar.com/in/shows/criminal-justice/1271316088'
  },
  {
    title: 'Taazaa Khabar',
    image: require('../assets/taazakhabar.webp'),
    URL: 'https://www.hotstar.com/in/shows/taaza-khabar/1260126094?search_query=taaza'
  },
  {
    title: 'Ipl 2025',
    image: require('../assets/rcbfinal.webp'),
    URL: 'https://www.hotstar.com/in/sports/cricket/rcb-vs-pbks-highlights-final/1540040398/video/highlights/watch?search_query=ipl+fina'
  },
  {
    title: 'Titanic',
    image: require('../assets/titanic.webp'),
    URL: 'https://www.hotstar.com/in/movies/titanic/1770001166?search_query=titan'
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
          <a
            href="https://www.hotstar.com/in"  
            target="_blank"                   
            rel="noopener noreferrer"         
            className="start-btn">
            <button> Start Watching </button>
          </a>

        </div>
      </section>

      <section className="movies-section">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <a href={movie.URL || '#'} target="_blank" rel="noopener noreferrer" className="movie-link">
            <div key={index} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
            </a>
          ))}
        </div>
      </section>

      <section className="trending-section">
        <h2>🔥 Trending Now</h2>
        <Slider {...sliderSettings}>
          {trending.map((movie, index) => (
            <a href={movie.URL || '#'} target="_blank" rel="noopener noreferrer" className="trending-link">
            <div key={index} className="trending-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
            </a>
          ))}
        </Slider>
      </section>
    </div>
  );
};

const trending = [
  { title: 'Extraction 2', image: require('../assets/extraction.webp'), URL: 'https://www.netflix.com/in/title/81098494}' },
  { title: 'Bhool Bhulaiyaa 2', image: require('../assets/bhoolbhulaiyya2.webp'), URL: 'https://www.netflix.com/in/title/81686134' },
  { title: 'Iron Man', image: require('../assets/iron.webp'), URL: 'https://www.netflix.com/in/title/81686134' },
  { title: 'Family Man', image: require('../assets/familyman.webp'), URL: 'https://www.primevideo.com/detail/0H3DDB4KBJFNDCKKLHNRLRLVKQ/ref=atv_dp_season_select_s2' },
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
