import React from "react";
import "./App.css";
import requests from "./Requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import "./Nav.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="MARVEL STUDIOS MOVIES"
        fetchUrl={requests.fetchMarvel}
        isLargeRow={true} // isLargeRow default
      />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} // isLargeRow default
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
