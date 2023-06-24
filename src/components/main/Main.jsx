// import React from 'react'
import './main.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';


// Movie Displayer

    const MovieDisplayer = ( {movie} ) => {

    // console.log(movie.title)
    return (
      <div className='displaying'>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='poster' />
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <div className='displaying-other'>
          <p>Ratings: {movie.vote_average}</p>
          <span>Popularity: {movie.popularity}</span> <br></br>
          <small>Release: {movie.release_date}</small> <br></br>
        </div>
      </div>
    )
  }

const Main = () => {

  const [data, setData] = useState([]);
  const [movie, setMovie] = useState('');
  const [page, setPage] = useState('1');


  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      include_adult: 'false',
      include_video: 'false',
      language: 'en-US',
      page: page,
      sort_by: 'popularity.desc',
      api_key: apiKey
    },
    headers: {
      accept: 'application/json',
      Authorization: authenticationKey
    }
  }; 

  //const 


  
const MovieComponent = () => {

  const movies = [];
  const returnedMovie = data.map((movie) => movies.push(movie));
  const detailsClick= (movie) => {
    const displayDiv = document.querySelector('.overlay');
    if(displayDiv.classList.contains('active')) {
      displayDiv.classList.remove('active');
    } else {
      displayDiv.classList.add('active');
    }

    setMovie(movie)

  }


  return (
    <div className='movie-container'>
      {movies.map((movie) => {return<div className='movie' key={movie.id}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt='poster' />
        <div className='movie-contents'>
        <h2>{movie.title}</h2>
        <p>Ratings: {movie.vote_average}</p>
        </div>
        <button className='details-btn' onClick={() => {detailsClick(movie)} }>Details</button>
      </div>})}
    </div>
  )
}

// Closes the Details view.
const closeBtn = () => {
  const movieDisplay = document.querySelector('.overlay');
  movieDisplay.classList.remove('active')
}
// Changes Pages
const handlePagination = (way) => {
  if(way === 'Next') {
    setPage((prevPage) => String(parseInt(prevPage, 10) + 1));
  } else {
    setPage((prevPage) => {
      const newPage = parseInt(prevPage, 10) - 1;
      return newPage >= 1 ? String(newPage) : '1';
    });
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputContent = e.target.search.value;
    if(inputContent === '') {
      return alert('You have to type Movie name!')
    }
    try {
      const searchedMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${inputContent}&api_key=${apiKey}`);
      setData(searchedMovie.data.results);
      console.log(searchedMovie.data.results);
    } catch (error) {
      console.log(error);
    }


  }

  const goFirsPage = () => {
    setPage('1');
  }



  useEffect(() =>{
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[page])
  return (
    <div className="main-container">
      <div className="main-container_search">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Search Movie' 
          name='search'/>
          <input type="submit" />
        </form>
      </div>
      <div className="main-container_content">
        <div className='movies-container'>
          <MovieComponent data={data} />
        </div>
        <div className='costum-paginator'>
          <a onClick={() => {handlePagination('Prev')}}>Prev</a>
          <a onClick={goFirsPage}>Go First Page</a>
          <a onClick={() => {handlePagination('Next')}}>Next</a>
        </div>
        <div className='overlay'>
          <button onClick={closeBtn} className='close'>X</button>
        <MovieDisplayer movie={movie}/>
        </div>
      </div>
    </div>
  )
}

export default Main