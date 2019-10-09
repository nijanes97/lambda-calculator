import React, {useState} from "react";
import "./App.css";
import styled from 'styled-components';
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Display from "./components/DisplayComponents/Display";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

let Container = styled.div
`
  padding: 15px;
  width: 600px;
  background-color: #af1e39;
  height: 900px;
  border-radius: 10px;
`

let Btns = styled.div
`
  height: 700px;
  margin: 0 auto;
  display:flex;
  flex-flow: row wrap;
`

let Center = styled.div
`
  width: 70%;
  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items:center;
`

let Side = styled.div
`
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: space-around;
  width: 15%;
`


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operatorIn, setOperatorIn] = useState('');
  const [sum, setSum] = useState(0);

  const createFirstNum = a => {
    if(firstNum === 0){
      return setFirstNum(a.target.value);
    }
    else{
      return setFirstNum(firstNum + a.target.value);
    }
  }

  const createSecondNum = a => {
    if(secondNum === 0){
      return setSecondNum(a.target.value);
    }
    else{
      return setSecondNum(secondNum + a.target.value);
    }
  }

  const createOperatorIn = a => {
    return setOperatorIn(a.target.value);
  }

  const clearNum = () => {
    setFirstNum(0);
    setSecondNum(0);
    setOperatorIn('');
    setSum(0);
  }

  const createSum = () => {
    switch (operatorIn) {
      case '+':
        setSum(parseInt(firstNum) + parseInt(secondNum));
      case '-':
        setSum(parseInt(firstNum) - parseInt(secondNum));
      case '*':
        setSum(parseInt(firstNum) * parseInt(secondNum));
      case '/':
        setSum(parseInt(firstNum) / parseInt(secondNum));
      default:
        return 'Error';
    }
    return setFirstNum(sum);
  }

  return (
    <Container>
      <Logo />
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display firstNum={firstNum} secondNum={secondNum} operatorIn={operatorIn} sum={sum} />
        <Btns>
          <Center>
            <Specials clearNum={clearNum}/>
            <Numbers firstNum={createFirstNum} secondNum={createSecondNum} operatorIn={operatorIn}/>
          </Center>
          <Side>
            <Operators createOperatorIn={createOperatorIn} createSum={createSum}/>
          </Side>
        </Btns>
    </Container>
  );
}

export default App;
