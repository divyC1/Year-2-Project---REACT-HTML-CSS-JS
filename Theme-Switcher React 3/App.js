import React, { useEffect, useState } from 'react';
import Heading from './components/Heading';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import SignStu from './components/SignStu';
import SignTea from './components/SignTea';
import Mathsquiz from './components/Mathsquiz';
import StuDashboard from './components/StuDashboard';
import TeaDashboard from './components/TeaDashboard';
import { Route, link } from 'react-router-dom';
import "./index.css";
import "./components/themes/switcher.scss";
// import  "./components/themes/dark.css";
// import  "./components/themes/light.css";
// import  "./components/themes/purple.css";
// import  "./components/themes/sky.css";

function App() {

	const [colorTheme, setColorTheme] = useState('switch-1');

	useEffect(() => {
		const currentThemeColor = localStorage.getItem('theme-color');
		if (currentThemeColor) {
			setColorTheme(currentThemeColor)
		}
	}, []);

	const handleClick = (theme) => {
		setColorTheme(theme);
		localStorage.setItem('theme-color', theme)
	}

	return (
		<div class="TheMain">
			<div className={`main  ${colorTheme}`}>
				<div class="theme-switches">
					<div class="stack-top">
						<div data-theme="light" class="switch" id="switch-1"
							onClick={() => handleClick("switch-1")}
						></div>

						<div data-theme="blue" class="switch" id="switch-2"
							onClick={() => handleClick("switch-2")}
						></div>

						<div data-theme="red" class="switch" id="switch-3"
							onClick={() => handleClick("switch-3")}
						></div>

						<div data-theme="green" class="switch" id="switch-4"
							onClick={() => handleClick("switch-4")}
						></div>
						<div data-theme="yellow" class="switch" id="switch-5"
							onClick={() => handleClick("switch-5")}
						></div>
					</div>


				</div>
				<Heading />
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/signstu" component={SignStu} />
				<Route exact path="/SignTea" component={SignTea} />
				<Route exact path="/Mathsquiz" component={Mathsquiz} />
				<Route exact path="/StuDashboard" component={StuDashboard} />
				<Route exact path="/TeaDashboard" component={TeaDashboard} />


			</div>
		</div>

	)
};

export default App;
