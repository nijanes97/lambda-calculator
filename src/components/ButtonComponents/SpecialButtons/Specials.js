import React, {useState} from "react";
import SpecialButton from "./SpecialButton";
import {specials} from "../../../data";
import styled from 'styled-components';

const Spec = styled.div`
  display:flex;
  flex-flow: row wrap;
  width: 90%;
  justify-content: space-evenly;
  padding-bottom: 25px;
`

//import any components needed

//Import your array data to from the provided data file

const Specials = props => {
  // STEP 2 - add the imported data to state
  const [special, setSpecial] = useState(specials);
  return (
    <Spec>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map((special, index) => (
        <SpecialButton special={special} key={index} clearNum={props.clearNum}/>
      ))}
    </Spec>
  );
};

export default Specials;