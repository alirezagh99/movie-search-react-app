import React from "react";

function MovieDetails() {
  return (
    <div className="flex flex-row justify-between px-3 text-lg mt-5">
      <h3>Title:</h3>
      <p>{movieCtx.movieData.Title}</p>
    </div>
  );
}

export default MovieDetails;
