import ShimmerMovies from "../ShimmerCard/ShimmerMovies";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 scrollbar-hide">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies ? (
            movies?.map((movie) => (
              <Link to={"/watch/" + movie.id}>
                <MovieCard key={movie.id} posterPath={movie?.poster_path} />
              </Link>
            ))
          ) : (
            <ShimmerMovies />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
