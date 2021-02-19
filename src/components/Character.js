import React, { useState } from "react";
import theme from "../theme/index";
import styled from "styled-components";

function Character(props) {
	const [showdiv, setShowdiv] = useState(false);

	const togglediv = () => {
		setShowdiv(!showdiv);
	};

	const { characterdata } = props;

	return (
		<StyledCharacterDiv>
			<StyledNameDiv>
				<StyledCharacterH1>{characterdata.name}</StyledCharacterH1>
			</StyledNameDiv>

			<StyledInfoDiv>
				{showdiv && (
					<StyledDiv2>
						<div>
							<img alt="" src={characterdata.image} width="120px"></img>
						</div>
						<div>
							<StyledCharacterP>
								<StyledSpan>Gender:</StyledSpan> {characterdata.gender}
							</StyledCharacterP>
							<StyledCharacterP>
								<StyledSpan>Species:</StyledSpan> {characterdata.species}
							</StyledCharacterP>
							<StyledCharacterP>
								<StyledSpan>Dead or Alive!!!:</StyledSpan>
								{characterdata.status} Thankfully
							</StyledCharacterP>
							<StyledCharacterP>
								<StyledSpan>Created:</StyledSpan>
								{characterdata.created}
							</StyledCharacterP>
						</div>
					</StyledDiv2>
				)}
				<StyledButton onClick={togglediv}>
					{showdiv ? "Hide" : "Show"} Info
				</StyledButton>
			</StyledInfoDiv>
		</StyledCharacterDiv>
	);
}
const StyledCharacterDiv = styled.div`
	border: solid black 5px;
	width: 50vw;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 3px auto;
	text-align: center;
`;
const StyledNameDiv = styled.div`
	align-text: center;
	margin: auto 0;
`;
const StyledCharacterH1 = styled.h1`
	font-size: 50px;
	text-shadow: 6px 6px 6px black;
	color: white;
`;
const StyledInfoDiv = styled.div``;
const StyledDiv2 = styled.div`
	height: 300px;
	margin: 1rem auto;
`;
const StyledSpan = styled.span`
	text-shadow: 2px 10px 10px black;
	color: white;
`;
const StyledCharacterP = styled.p`
	font-size: 20px;
	text-shadow: 10px 10px 10px black;
	color: cyan;
`;
const StyledButton = styled.button`
	align-self: center;
	margin: 30px auto;
`;
export default Character;
