import React, { useState } from 'react'
import axios from 'axios';

export default function UpdateMovie (props) {

    const {movieState, handleChange} = props



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(movieState.movie.id)
        axios
        .put(`http://localhost:5000/api/movies/${movieState.movie.id}`, movieState.movie)
        .then(res => {
            console.log(res)
            return props.history.push(`/movies/${movieState.movie.id}`)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" placeholder="Title" name="title" value={movieState.movie.title} onChange={ event => handleChange(event)}/>
            <input type="text" placeholder="Director" name="director" value={movieState.movie.director} onChange={ event => handleChange(event)}/>
            <input type="text" placeholder="Metascore" name="metascore" value={movieState.movie.metascore} onChange={ event => handleChange(event)}/>
            <input type="text" placeholder="Stars" name="stars" value={movieState.movie.stars} onChange={ event => handleChange(event)}/>
            <button type="submit">Submit Changes</button>
        </form>
    )
}