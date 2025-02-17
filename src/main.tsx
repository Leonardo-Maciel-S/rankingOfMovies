import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home.tsx";
import Movie from "./pages/Movie.tsx";
import Search from "./pages/Search.tsx";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<Movie />} />
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
