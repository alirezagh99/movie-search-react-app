import React, { useState } from "react";
import MovieContext from "./movie-context";
const API_KEY = "42cb93c7";
const URL = "http://www.omdbapi.com/?apikey=[yourkey]&";
function MovieProvider(props) {
  const [movieData, setMovieData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = (e) => {
    const url = `https://www.omdbapi.com/?t=${e.title}&y=${e.year}&apikey=42cb93c7`;

    async function fetching() {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);

      const neededDatas = {
        title: data.Title,
        year: data.Year,
        rated: data.Rated,
        runtime: data.Runtime,
        awards: data.Awards,
        boxoffice: data.BoxOffice,
        country: data.Country,
        director: data.Director,
        genre: data.Genre,
        language: data.Language,
        writer: data.Writer,
        imdbrating: data.imdbRating,
      };
      setMovieData(neededDatas);
    }
    fetching();
  };
  const movieContext = {
    search: searchHandler,
    movieData: movieData,
    isLoading: isLoading,
  };
  return (
    <MovieContext.Provider value={movieContext}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieProvider;
