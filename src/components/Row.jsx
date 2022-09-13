import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../axios";
import YouTube from "react-youtube";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLarge, id }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = React.useState("");
  const [slider, setSlider] = React.useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const showTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const params = new URLSearchParams(new URL(url).search);
          setTrailerUrl(params.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const slideLeft = () => {
    let slider = document.getElementById("row__posters" + id);

    setSlider((slider.scrollLeft = slider.scrollLeft - 450));
  };
  const slideRight = () => {
    let slider = document.getElementById("row__posters" + id);

    setSlider((slider.scrollLeft = slider.scrollLeft + 450));
  };
  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1 className="titlee">{title}</h1>
      <div className="row__posters" id={"row__posters" + id}>
        {slider > 0 ? (
          <NavigateBeforeIcon
            id="btn"
            fontSize="50"
            className="left_btn"
            onClick={slideLeft}
          />
        ) : (
          ""
        )}

        <NavigateNextIcon
          id="btn"
          fontSize="50"
          className="right_btn"
          onClick={slideRight}
        />
        {movies.map((movie) => (
          <div id="rows">
            <img
              onClick={() => showTrailer(movie)}
              key={movie.id}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              src={`${baseUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <h2 className="movie_name">{movie.name || movie.title}</h2>
          </div>
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
