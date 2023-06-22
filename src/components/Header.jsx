import { NavLink } from "react-router-dom";
import logo from "../assets/mk-low-resolution-logo-color-on-transparent-background.png";

const Header = () => {
	return (
		<header>
			<nav id="navbar">
				<div id="logo">
					<img src={logo} alt="logo" />
				</div>
				<div>
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
				</div>
			</nav>
		</header>
	);
};

export { Header };
