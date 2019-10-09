import React from "react";
import styled from 'styled-components';

const Displayer = styled.div
`
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
align-items: center;
margin 0 auto;
margin-bottom: 15px;
margin-top: 15px;
height: 120px;
width: 90%;
text-overflow: ellipsis;
border-radius: 120px;
background-color: #323335;
color: white;
  p{
    display: flex;
    justify-content: flex-end;
    font-size: 60px;
    margin-right: 10px;
    max-width: 20%;
  }
`

const Display = props => {
  return <Displayer><p>{props.sum? props.sum : (props.OperatorIn ? props.secondNum : (!props.secondNum ? props.firstNum :  props.secondNum))}</p></Displayer>;
};

export default Display;