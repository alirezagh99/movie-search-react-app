import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieProvider from "./store/MovieProvider";

function App() {
  return (
    <MovieProvider>
      <SearchBar />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
