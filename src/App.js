import "./App.css";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import React from "react";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import BackgroundAnimation from "./components/Background/Background";
import MainSection from "./components/MainSection/MainSection";
import Happy18 from './components/Happy18/Happy18';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/" exact render={() => (
						<>
							<div className="animation-container" id="home">
								<BackgroundAnimation />
							</div>
							<MainSection />
						</>
					)} />
					<Route path="/happy18" component={Happy18} />
					{/* Add other routes here */}
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
