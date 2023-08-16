import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  
        const [ inputValue, setInputValue ] = useState(' ');
        const [storedValue, setStoredValue] = useState(null);
        const [operator, setOperator] = useState(null);
        
        const handleNumberClick = (number) => {
            setInputValue( inputValue + number);
            
        }
        
        const handleReset = () => {
            setInputValue( '' )
        }

        const handleOperatorClick = (op) => {
            if (inputValue !== '') {
              setStoredValue(parseFloat(inputValue));
              setInputValue('');
              setOperator(op);
            }
          };
        
          const handleEqualsClick = () => {
            if (operator && inputValue !== '') {
              const currentInput = parseFloat(inputValue);
              let result;
        
              switch (operator) {
                case '+':
                  result = storedValue + currentInput;
                  break;
                case '-':
                  result = storedValue - currentInput;
                  break;
                case '*':
                  result = storedValue * currentInput;
                  break;
                case '/':
                  result = storedValue / currentInput;
                  break;
                default:
                  return;
              }
        
              setInputValue(result.toString());
              setStoredValue(result);
              setOperator(null);
            }
          };
        
       
  
    return (
    <div className="calculator">
      <input type="text" id="display" value={ inputValue} readOnly />
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')} >7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button className="operator" onClick={() => handleOperatorClick('/')} >/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button className="operator" onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button className="operator" onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button className="operator" onClick={handleEqualsClick}>=</button>
        <button className="operator clear" onClick={ handleReset } >C</button>
        <button className="operator" onClick={() => handleOperatorClick('+')}>+</button>
      </div>
    </div>
  );
}

export default Calculator;
