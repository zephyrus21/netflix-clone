import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../request';
import './Banner.css';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    function truncat(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button play">Play</button>
                    <button className="banner-button list">My List</button>
                </div>
                <h3 className="banner-descpriptions">
                    {truncat(movie?.overview, 150)}
                </h3>
            </div>
            <div className="backdrop"></div>
        </header>
    );
};

export default Banner;
