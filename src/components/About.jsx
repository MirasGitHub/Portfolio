import lightbulb from "../assets/lightbulb.png";
import musicnote from "../assets/Vector 141.png";
import arrowup from "../assets/Vector 186 (1).png";
import group62 from "../assets/Group 62.png";

const About = () => {
	return (
		<div>
			<div className="about">
				<div className="about--content">
					<h1>
						About <span>me</span>
					</h1>
					<p>
						My name is <span>Miranda Kobalia.</span> I am Junior Front-end
						Developer and eager to improve my software skills. Currently I am
						studying React js. as well as Back-end development tools such as
						Python and its framework django. I would like to become{" "}
						<span>Full-Stack Web Developer...</span>
					</p>
					<img src={musicnote} alt="musicnote" />
					<img src={lightbulb} alt="lightbulb" />
					<img src={arrowup} alt="arrowup" />
				</div>

				<div className="about--imgs">
					<img src={group62} alt="developer" className="developer" />
				</div>
			</div>
		</div>
	);
};

export default About;
