import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

function Movie({ addToSavedList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const history = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const deleteMovie = () => {
    axios
    .delete(`http://localhost:5000/api/movies/${movie.id}`)
    .then(response => console.log("bk: Movie.js: deleteMovie: Deleted Movie Response: ", response))
    .catch(err => console.log("bk: Movie.js: deleteMovie: Deleted Movie Error: ", err));

    history.push('/');
    window.location.reload();
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <div className="save-button" onClick={saveMovie}>
        Save
      </div>

      <div>
        <Link className="add-movie-button" to={`/update-movie/${movie.id}`}>
          Update
        </Link>
          
        <div className="add-movie-button" onClick={deleteMovie}>
          Delete

        </div>
      </div>

    </div>
  );
}

export default Movie;
