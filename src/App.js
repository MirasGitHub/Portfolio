import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<div id="line"></div>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" isActive element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<br />
			<Footer />
		</div>
	);
}

export default App;
