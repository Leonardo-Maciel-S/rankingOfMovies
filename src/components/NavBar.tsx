import { type FormEvent, useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

const NavBar = () => {
	const [search, setSearch] = useState<string>("");
	const navigate = useNavigate();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!search) return;

		navigate(`/search?q=${search}`);

		setSearch("");
	};

	return (
		<nav id="navbar">
			<h2>
				<Link to="/">
					<BiCameraMovie /> MoviesLib
				</Link>
			</h2>
			<form action="" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Busque um filme"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">
					<BiSearchAlt2 />
				</button>
			</form>
		</nav>
	);
};

export default NavBar;
