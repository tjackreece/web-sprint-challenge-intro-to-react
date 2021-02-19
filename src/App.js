import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL, API_KEY } from "../src/constants/APIdata";
import Character from "../src/components/Character";
const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	const [rnmCharacters, setRnmCharacters] = useState([]);

	useEffect(() => {
		axios
			.get(`${BASE_URL}${API_KEY}`)
			.then((response) => {
				setRnmCharacters(response.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Ricky and Morty Characters</h1>
			<StyledDiv4>
				{rnmCharacters.map((rnm) => {
					return <Character characterdata={rnm} />;
				})}
			</StyledDiv4>
		</div>
	);
};
const StyledDiv4 = styled.div`
	width: 100vw;
`;
export default App;
