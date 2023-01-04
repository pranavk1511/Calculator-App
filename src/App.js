import { useReducer } from 'react';
import DigitButton from './DigitButton';
import './styles.css'
import OperationButton from './OperationButton';

export const ACTIONS = {
  ADD_DIGITS : 'add-digits',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'
}

function reducer(state,{type,payload}){

    switch(type){
      case ACTIONS.ADD_DIGITS:
        if ( payload.digit = "0" && state.currentOperand === "0"){
          return state;
        }
        if ( payload.digit === "." && state.currentOperand.includes(".")){
          return state;
        }
        return {
          ...state,
          currentOperand : `${state.currentOperand || ""}${payload.digit}`,
      
    }
  }

}


function App() {
  const [{currentOperand , prevOperand, operation},dispatch]= useReducer(
    reducer,
    {}
    )
  
  
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prevOperand} {operation}</div>
        <div className="current-opernad">{currentOperand}</div>
      </div>
        <button className="span-two">AC</button>
        <OperationButton operation= "DEL" dispatch={dispatch}></OperationButton>
        <OperationButton operation= "÷" dispatch={dispatch}></OperationButton>
        <DigitButton digit= "1" dispatch={dispatch}></DigitButton>
        <DigitButton digit= "2" dispatch={dispatch}></DigitButton>
        <DigitButton digit= "3" dispatch={dispatch}></DigitButton>
        <OperationButton operation= "*" dispatch={dispatch}></OperationButton>
        <DigitButton digit= "4" dispatch={dispatch}>4</DigitButton>
        <DigitButton digit= "5" dispatch={dispatch}>5</DigitButton>
        <DigitButton digit= "6" dispatch={dispatch}>6</DigitButton>
        <OperationButton operation= "+" dispatch={dispatch}></OperationButton>
        <DigitButton digit= "7" dispatch={dispatch}>7</DigitButton>
        <DigitButton digit= "8" dispatch={dispatch}>8</DigitButton>
        <DigitButton digit= "9" dispatch={dispatch}>9</DigitButton>
        <OperationButton operation= "-" dispatch={dispatch}></OperationButton>
        <DigitButton digit="0" dispatch={dispatch}></DigitButton>
        <DigitButton digit="." dispatch={dispatch}></DigitButton>
        <button className='span-two'>=</button>
       
    </div>
  );
}

export default App;
