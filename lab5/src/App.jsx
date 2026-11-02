import './App.css'
import { useState } from 'react';
function Movie_info() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  function AddMovie() {
    if (movieName.trim() !== "") {
      setMovies([...movies, movieName]);
      setMovieName("");
    }
  }
  function RemoveMovie(index) {
    const newMovies = movies.filter((movie, i) => i !== index);
    setMovies(newMovies);
  }

  return (
    <div className="app">
      <h1>My Movie Watchlist 🎬</h1>
      <p>Keep track of the movies you watch!</p>

      <div className="movie-form">
        <input placeholder="Enter movie name"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)} />
        <button onClick={AddMovie}>Add</button>
      </div>
      <h2>My Movies</h2>
      <ul>
        {
          movies.map((movie, index) => (
            <li>
              {movie}
              <button onClick={() => RemoveMovie(index)}>Remove</button>
            </li>
          ))

        }
      </ul>
    </div >
  );
}


function App() {
  return (

    <Movie_info />

  );
}

export default App;