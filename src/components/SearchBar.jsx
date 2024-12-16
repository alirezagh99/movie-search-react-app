import React, { useContext, useRef, useState } from "react";
import MovieContext from "../store/movie-context";

function SearchBar() {
  const movieCtx = useContext(MovieContext);
  const inputRefTitle = useRef();
  const inputRefYear = useRef();
  const [invalid, setInvalid] = useState(false);
  const searchHandler = (e) => {
    setInvalid(false);
    if (inputRefTitle.current.value === "") {
      setInvalid(true);
      return;
    }
    const data = {
      title: inputRefTitle.current.value,
      year: inputRefYear.current.value,
    };
    movieCtx.search(data);
  };

  return (
    <div className="w-1/2 flex flex-col justify-center p-5 bg-[#618685] rounded m-auto mt-10 text-white">
      <input
        ref={inputRefTitle}
        className="block text-[rgba(0,0,0,0.7)]  px-2"
        placeholder="enter the movie title..."
      />
      {invalid && <p>title cannot be empty...</p>}
      <input
        ref={inputRefYear}
        className="block mt-5 text-[rgba(0,0,0,0.7)] mb-5 px-2"
        placeholder="enter the Year of release...."
      />
      <button
        onClick={searchHandler}
        className="border border-[#2b3c3b] bg-[#618685] hover:bg-[#2b3c3b] transition-all rounded w-1/3 m-auto"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
