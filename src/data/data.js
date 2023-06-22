import { v4 as uuidv4 } from "uuid";

import quiz from "../assets/projects covers/detective-g856ff2eec_640.png";
import checklist from "../assets/projects covers/checklist-gded0304c6_640.png";
import dice from "../assets/projects covers/dice-ga7c592669_640.png";
import user from "../assets/projects covers/music-g54c25699d_640.png";
import accordion from "../assets/projects covers/illustration-woman-online-mobile.svg";

const data = [
	{
		id: uuidv4(),
		title: "Quiz App",
		tools: "React, React-Router, SCSS Bootstrap/Reactstrap...",
		url: "https://quiz-ol-academy.netlify.app",
		imageUrl: quiz,
	},
	{
		id: uuidv4(),
		title: "Pig Game",
		tools: "Javascript, html, css...",
		url: "https://pig-game-mirasgithub.netlify.app/",
		imageUrl: dice,
	},
	{
		id: uuidv4(),
		title: "Todo App",
		tools: "React, Bootstrap/Reactstrap...",
		url: "https://github.com/MirasGitHub/ol-academy-react-todo",
		imageUrl: checklist,
	},
	{
		id: uuidv4(),
		title: "Django User project",
		tools: "Django, Python, html",
		url: "https://github.com/MirasGitHub/Django-User-creation-deletion-project",
		imageUrl: user,
	},
	{
		id: uuidv4(),
		title: "Accordion Card",
		tools: "React...",
		url: "https://faq-accordion-card-with-react.netlify.app",
		imageUrl: accordion,
	},
];

export default data;
