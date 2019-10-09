import React from "react";
import styled from 'styled-components';

let OpsButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 0px;
  background-color: #007291;
  color: white;
  margin-top: 5px;
  font-size: 48px;
  box-shadow: 0px 2px 0px 2px #4b0e15;
`

const OperatorButton = props => {
  return (
    <OpsButton value={props.operator.value} onClick={props.operator.value !== '=' ? props.createOperatorIn: props.createSum}>{props.operator.value}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </OpsButton>
  );
};

export default OperatorButton;