import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";
import type { Movie } from "../types/movie";
import MovieCard from "../components/MovieCard";

const Search = () => {
	const [searchParams] = useSearchParams();
	const [movies, setMovies] = useState<Movie[]>([]);
	const query = searchParams.get("q");

	const getTopRatedMovies = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setMovies(data.results);
	};

	useEffect(() => {
		const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
		console.log(searchWithQueryURL);
		getTopRatedMovies(searchWithQueryURL);
	}, []);

	console.log(query);
	return (
		<div className="container">
			<h2 className="title">
				Resultado para: <span className="query-text">{query}</span>{" "}
			</h2>
			<div className="movies-container">
				{movies?.length > 0 &&
					movies.map((movie) => {
						return <MovieCard key={movie.id} movie={movie} />;
					})}
			</div>
		</div>
	);
};

export default Search;
