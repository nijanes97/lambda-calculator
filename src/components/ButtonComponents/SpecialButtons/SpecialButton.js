import React from "react";
import styled from 'styled-components';

let SpecButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0px;
  background-color: #0b5d9b;
  color: white;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px #4b0e15;
`

const SpecialButton = props => {
  return (
    <SpecButton onClick={props.special === "C" ? props.clearNum : null}>
      {/* Display a button element rendering the data being passed down from the parent container on props */props.special}
    </SpecButton>
  );
};

export default SpecialButton;