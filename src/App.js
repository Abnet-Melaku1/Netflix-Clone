import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";

import Footer from "./components/Footer";

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
          id={1}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} id={2} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} id={3} />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          id={4}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          id={5}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          id={6}
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          id={7}
        />
        <Row
          title="Documentaries "
          fetchUrl={requests.fetchDocumentaries}
          id={8}
        />
      </div>
      <div className="blur">
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          id={6}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          id={7}
        />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
