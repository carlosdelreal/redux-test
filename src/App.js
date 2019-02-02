import React, { Component } from 'react';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;

// Initial State
const defaultState = {
	welcome: 'Hi',
	otherState: 'some stuff'
};

// Reducer
const greeting = (state = defaultState, action) => {
	switch (action.type) {
		case 'GREET_ME':
			return {...state, welcome: 'Hi Carlos!'};
		case 'GREET_WORLD':
			return {...state, welcome: 'Hello World'};
		default:
			return state;
	}
};

// Store
const store = createStore(greeting);

// log with initial state
console.log(store.getState());

// Actions
store.dispatch({
	type: 'GREET_ME'
});

// log after action is dispatched
console.log(store.getState());
