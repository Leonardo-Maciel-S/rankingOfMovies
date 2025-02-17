import { useStatem, useEffect, useState } from "react";

const moviesURL: string = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import type { Movie } from "../types/movie";

const Home = () => {
	const [topMovies, setTopMovies] = useState<Movie[]>([]);

	const getTopRatedMovies = async (url: string) => {
		const res = await fetch(url);
		const data = await res.json();

		setTopMovies(data.results);
	};

	useEffect(() => {
		const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
		getTopRatedMovies(topRatedUrl);
	}, []);

	return (
		<div className="container">
			<h2 className="title">Melhores filmes: </h2>
			<div className="movies-container">
				{topMovies?.length > 0 &&
					topMovies.map((movie) => {
						return <p key={movie.id}>{movie.title}</p>;
					})}
			</div>
		</div>
	);
};

export default Home;
