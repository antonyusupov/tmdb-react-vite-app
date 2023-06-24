// import React from 'react';
import './navbar.scss';

const Navbar = () => {
  const displayMenu = () => {
    const links = document.querySelector('.responsive-menu_links');
    if(links.classList.contains('hide')) {
      links.classList.remove('hide');
    }
  }

  const closeMenu = () => {
    const links = document.querySelector('.responsive-menu_links');
    links.classList.add('hide');
  }
  return (
    <div className='navbar-container'>
      <div className='navbar-links_container'>
        <ul>
        <a href='#'>Home</a>
        <a href='https://www.themoviedb.org/'>TMDB</a>
        <a href='https://www.themoviedb.org/movie'>TMDB Popular</a>
        </ul>
      </div>

      <div className='responsive-menu_container'>
        <a onClick={displayMenu}>Menu</a>
        <div className='responsive-menu_links hide'>
          <div className='menu-close_btn'>
            <a onClick={closeMenu}>X</a>
          </div>
          <a href='#'>Home</a>
          <a href='https://www.themoviedb.org/'>TMDB</a>
          <a href='https://www.themoviedb.org/movie'>TMDB Popular</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;