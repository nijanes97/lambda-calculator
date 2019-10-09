import React, {useState} from "react";
import OperatorButton from "./OperatorButton";
import {operators} from "../../../data";
import styled from 'styled-components';

const Ops = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  height: 90%;
  padding-top: 20px;
`

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state
  const [operator, setOperator] = useState(operators);
  return (
    <Ops>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       operator.map((operator, index) => (
        <OperatorButton operator={operator} key={index} createOperatorIn={props.createOperatorIn} createSum={props.createSum} />
       ))}
    </Ops>
  );
};

export default Operators;