import React from "react";

//include images into your bundle
import Navbar from "/workspace/react-hello/src/js/component/navBar.jsx";
import Jumbotron from "/workspace/react-hello/src/js/component/Jumbotron.jsx";
import Card from "/workspace/react-hello/src/js/component/cards.jsx";
import Footer from "/workspace/react-hello/src/js/component/Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="App">
		<Navbar></Navbar>,
		<Jumbotron></Jumbotron>,
		<Card></Card>,
		<Footer></Footer>
		</div>
		);
};

export default Home;
