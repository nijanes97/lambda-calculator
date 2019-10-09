import React, {useState} from "react";
import styled from 'styled-components';
import NumberButton from "./NumberButton";
import {numbers} from "../../../data";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Nums = styled.div`
  height: 500px;
  display:flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-evenly;
  align-content: space-evenely;
`

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers);
  return (
    <Nums>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       number.map((number, index) => (
         <NumberButton number={number} key={index} firstNum={props.firstNum} secondNum={props.secondNum} operatorIn={props.operatorIn} />
       ))}
    </Nums>
  );
};

export default Numbers;