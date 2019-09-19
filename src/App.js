import React from 'react';
import './App.css';
import menu from './data.js';
import NavWrapper from './components/NavWrapper';

function App() {
	return (
		<div className="App">
			<NavWrapper menu={menu} />
		</div>
	);
}

export default App;
