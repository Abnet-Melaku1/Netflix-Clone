import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import About from "./About";

import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div id="app">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLarge={true}
        />
        <Row
          id="trending"
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
      </div>
      <div className="blur">
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
