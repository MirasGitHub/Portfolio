import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../assets/Group 2346.png";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import arrow from "../assets/Vector 187.png";

import resume from "../docs/Miranda's Resume (1).pdf";

const Home = () => {
	return (
		<div className="home--container">
			<div className="heading">
				<div>
					<img src={arrow} alt="arrow" />
					<h1>
						Front-End Web <br /> <span>Developer</span>
					</h1>
				</div>
				<br />
				<a
					href={resume}
					download="Miranda-Kobalia-Resume"
					target="_blank"
					rel="noreferrer"
				>
					<button>
						Download CV <FontAwesomeIcon icon={faDownload} />
					</button>
				</a>
			</div>
			<div className="img-container">
				<img src={hero} alt="hero" />
			</div>
		</div>
	);
};

export default Home;
