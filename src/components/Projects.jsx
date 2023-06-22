import Card from "./Card";
import data from "../data/data";
import { Button } from "reactstrap";

const Projects = () => {
	const cards = data.map((item) => (
		<Card
			key={item.id}
			title={item.title}
			imageUrl={item.imageUrl}
			url={item.url}
		/>
	));

	return (
		<div className="projects">
			<div className="my-works">
				<h1>
					My Recent <span>works</span>
				</h1>
				<div className="cards-container">
					<div>{cards}</div>
					<br />
					<Button>
						<a
							href="https://github.com/MirasGitHub?tab=repositories"
							target="_blank"
							rel="noreferrer"
						>
							See more...
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
