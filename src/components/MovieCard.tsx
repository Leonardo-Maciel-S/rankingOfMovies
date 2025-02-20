import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import type { Movie } from "../types/movie";

const imageURl = import.meta.env.VITE_IMG;

interface IMovieCard {
	movie: Movie;
	showLink?: boolean;
}

const MovieCard = ({ movie, showLink = true }: IMovieCard) => {
	return (
		<div className="movie-card">
			<img src={`${imageURl}${movie.poster_path}`} alt={movie.title} />
			<h2>{movie.title}</h2>
			<p>
				<FaStar /> {movie.vote_average}
			</p>

			{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
		</div>
	);
};

export default MovieCard;
