import React, { useContext } from "react";
import MovieContext from "../store/movie-context";

function MovieList() {
  const movieCtx = useContext(MovieContext);
  return (
    <div className="w-1/2 p-5 m-auto mt-5 bg-[#618685] rounded text-white">
      {!movieCtx.movieData && !movieCtx.isLoading && (
        <p className="text-center">Not any movie yet...</p>
      )}
      {movieCtx.isLoading && <p className="text-center text-xl">Loading...</p>}
      {movieCtx.movieData && (
        <div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Title:</h3>
            <p>{movieCtx.movieData.title}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Year of Release:</h3>
            <p>{movieCtx.movieData.year}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Rated:</h3>
            <p>{movieCtx.movieData.rated}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Runtime:</h3>
            <p>{movieCtx.movieData.runtime}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Awards:</h3>
            <p>{movieCtx.movieData.awards}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>BoxOffice:</h3>
            <p>{movieCtx.movieData.boxoffice}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Country:</h3>
            <p>{movieCtx.movieData.country}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Director:</h3>
            <p>{movieCtx.movieData.director}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Genre:</h3>
            <p>{movieCtx.movieData.genre}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Language:</h3>
            <p>{movieCtx.movieData.language}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>Writer:</h3>
            <p>{movieCtx.movieData.writer}</p>
          </div>
          <div className="flex flex-row justify-between px-3 text-lg mt-5">
            <h3>imdbRating:</h3>
            <p>{movieCtx.movieData.imdbrating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
