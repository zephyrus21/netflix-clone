//! componenet for each row on the app
import React, { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';

const imgUrl = 'http://image.tmdb.org/t/p/original/';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]);

    console.log(movies);

    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="row-posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row-poster ${
                            props.isLargeRow ? 'row-poster-large' : null
                        }`}
                        src={`${imgUrl}${
                            props.isLargeRow
                                ? movie.poster_path
                                : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Row;
