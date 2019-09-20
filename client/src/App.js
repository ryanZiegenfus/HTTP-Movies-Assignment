import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const [movieList, setMovieList] = useState({
    movies: []
  })

  const [movieState, setMovieState] = useState({ 
    movie: {
        title: '',
        director: '',
        metascore: '',
        stars: [],
        id: ''
    }
  })

  const handleChange = (event) => {
    setMovieState({...movieState, movie: {...movieState.movie, [event.target.name]: event.target.value}});
    console.log(movieState);
  }

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const updateMovie = movie => {
    setMovieState({...movieState, movie:movie})
  }

  return (
    <>
      <SavedList list={savedList} />
      <Route 
        exact path="/"
        render={props => {
          return <MovieList {...props} movieList={movieList} setMovieList={setMovieList}/>;
        }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} updateMovie={updateMovie} />;
        }}
      />
      <Route 
        path="/update-movie/:id"
        render={props => {
          return <UpdateMovie {...props} movieState={movieState} handleChange={handleChange}/>;
        }}

      />
    </>
  );
};

export default App;
