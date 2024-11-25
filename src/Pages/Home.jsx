import MovieCard from "../components/MovieCard";
import { useState } from "react";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Mr. Robot", release_date: "2016" },
    { id: 2, title: "Amateur", release_date: "2024" },
    { id: 3, title: "Social Network", release_date: "2010" },
  ];

  const handleSearch = (e) => {
    e.prevenDefault();
    alert(searchQuery);
    setSearchQuery();
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
