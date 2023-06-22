import arrow1 from "../assets/Vector 186.png";
import group2372 from "../assets/Group 2372.png";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import keyboard from "../assets/keyboard.png";
import envelope from "../assets/mail.png";

const initialValue = [
	{
		name: "",
		email: "",
		message: "",
	},
];
const Contact = () => {
	const [form, setForm] = useState(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		setForm(...initialValue);
	};

	const handleInputValue = (e) => {
		const { name, value } = e.target;

		setForm([
			{
				...form,
				[name]: value,
			},
		]);
	};

	return (
		<div>
			<img src={keyboard} alt="keaboard" id="keyboard" />
			<div className="contact-container">
				<div className="contact--header">
					<h1>
						Got a project in <br /> <span>mind?</span>
					</h1>
					<div className="contact-imgs">
						<img src={arrow1} alt="arrow" />
						<img src={group2372} alt="arrow" />
					</div>
				</div>
				<div id="form">
					<Form action="" onSubmit={handleSubmit}>
						<div className="contact--form">
							<div>
								<Label htmlFor="name">Your name</Label>
								<Input
									type="text"
									value={form.name}
									placeholder="Name"
									id="name"
									name="name"
									onChange={handleInputValue}
								/>
							</div>
							<div>
								<Label htmlFor="email">Your email</Label>
								<Input
									type="email"
									value={form.email}
									placeholder="Email"
									id="email"
									name="email"
									onChange={handleInputValue}
								/>
							</div>
						</div>
						<br />
						<Label htmlFor="message">Your Message</Label>
						<Input
							type="textarea"
							value={form.message}
							placeholder="Message"
							id="message"
							name="message"
							onChange={handleInputValue}
						/>

						<br />
						<button type="submit" className="message-btn">
							<p>
								Send Message <FontAwesomeIcon icon={faLocationArrow} />
							</p>
						</button>
					</Form>
				</div>
			</div>
			<img src={envelope} alt="envelope" id="envelope" />
		</div>
	);
};

export default Contact;
