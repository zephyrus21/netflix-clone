import React from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './request';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
    return (
        <div className="app">
            <Nav />
            <Banner />
            <Row
                title="Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romantic Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}

export default App;
