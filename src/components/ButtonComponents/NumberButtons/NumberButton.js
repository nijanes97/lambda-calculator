import React from "react";
import styled from 'styled-components';


let NumButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0px;
  background-color: #094477;
  color: white;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px #4b0e15;
  :nth-child(10){
    border-radius: 100px;
    width: 66%;
  }
`

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <NumButton value={props.number} onClick={!props.operatorIn?  props.firstNum : props.secondNum}>{props.number}</NumButton>
    </>
  );
};

export default NumberButton;
