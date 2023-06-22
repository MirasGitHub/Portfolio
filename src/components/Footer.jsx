import {
	faAddressBook,
	faHouseUser,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import fbicon from "../assets/facebook.png";
import linkedin from "../assets/linkedin (1).png";
import github from "../assets/github.png";

const Footer = () => {
	return (
		<div id="footer">
			<div>
				<div>
					<nav>
						<NavLink
							to="/home"
							className={({ isActive, isPending }) =>
								isPending ? "pending" : isActive ? "active" : ""
							}
						>
							<FontAwesomeIcon icon={faHouseUser} /> Home
						</NavLink>
						<NavLink to="/about">
							<FontAwesomeIcon icon={faUser} /> About
						</NavLink>
						<NavLink to="/contact">
							<FontAwesomeIcon icon={faAddressBook} /> Contact
						</NavLink>
					</nav>
				</div>
				<div className="social-media">
					<a
						href="https://www.linkedin.com/in/miranda-kobalia-b369141b6/"
						target="_blank"
						rel="noreferrer"
					>
						<button>
							<img src={linkedin} alt="linkedin" />
						</button>
					</a>
					<a
						href="https://github.com/MirasGitHub?tab=repositories"
						target="_blank"
						rel="noreferrer"
					>
						<button>
							<img src={github} alt="github" />
						</button>
					</a>
					<a
						href="https://www.facebook.com/miranda.kobaliaa"
						target="_blank"
						rel="noreferrer"
					>
						<button>
							<img src={fbicon} alt="facebook" />
						</button>
					</a>
				</div>
				<br />
				<p>
					<small>MK &copy;Copyright 2023</small>
				</p>
			</div>
		</div>
	);
};

export default Footer;
