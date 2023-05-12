import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<nav id="sidebar">
			<NavLink
				to="/home"
				className={({ isActive, isPending }) =>
					isPending ? "pending" : isActive ? "active" : ""
				}
			>
				Home
			</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
};

export { Header };
