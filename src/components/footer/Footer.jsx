// import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className='footer-content_constainer'>
        <div className='links-container'>
          Links
          <a href='https://www.youtube.com/'>YouTube</a>
          <a href='https://www.twitter.com/'>Twitter</a>
          <a href='https://www.github.com/'>GitHub</a>
          <a href='https://www.linkedin.com/'>LinkedIn</a>
        </div>
        <div className='links-container'>
          Go To TMDB
          <a href='https://www.themoviedb.org/'>TMDB</a>
        </div>
        <div className='links-container'>
          About TMDB
          <a href='https://www.themoviedb.org/about'>About</a>
        </div>
        <div className='links-container'>
          TMDB Movies
          <a href='https://www.themoviedb.org/movie'>Popular</a>
          <a href='https://www.themoviedb.org/movie/upcoming'>Upcoming</a>
          <a href='https://www.themoviedb.org/movie/top-rated'>Top Rated</a>
        </div>
      </div>
      <div className='footer-icon_container'>
        <div className='source-code'>
          <a href='https://www.github.com/antonyusupov'>Source Code</a>
        </div>
      </div>

    </div>
  )
}

export default Footer;