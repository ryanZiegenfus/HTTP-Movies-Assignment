import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => {
        console.log(res.data)
        return this.props.setMovieList({...this.props.movieList, movies: res.data })})
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movieList.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}
