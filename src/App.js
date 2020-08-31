import React from 'react';
import './App.css';
import Row from './Components/Row';
import request from './request';
import Banner from './Components/Banner';

function App() {
    return (
        <div className="App">
            <Banner />
            <Row
                title="Netflix Originals"
                fetchUrl={request.fetchNetflixOriginals}
                isLargeRow
            />

            <Row title="Trending Now" fetchUrl={request.fetchTrending} />

            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row
                title="Romantic Movies"
                fetchUrl={request.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    );
}

export default App;
