import './App.css';
import { BtnArea } from './Components/BtnArea';
import { Display } from './Components/Display';
import{useState} from 'react';

const operators = ["*", "+", "-", "%", "/"];

const App = () => {
  const [strToDisplay, setStrToDisplay] = useState("");
  const [lastOperator, setLastOperator] = useState("");

  const handleOnButtonClick = (val) => {
        

        if (val === "AC") {
          return setStrToDisplay("");
        }
        if (val === "C") {
          return setStrToDisplay(strToDisplay.slice(0, -1));
        }
        if (val === "=") {
          const lastChar = strToDisplay[strToDisplay.length - 1];
          let temStr = strToDisplay;

        if (operators.includes(lastChar)) {
          temStr = strToDisplay.slice(0, -1);
        }
        console.log(temStr)

          return setStrToDisplay(eval(temStr).toString());
        }

        if (operators.includes(val)) {
          if (!strToDisplay)  {
            return;
          }

          let temStr = strToDisplay;
          const lastChar= strToDisplay[strToDisplay.length - 1];

          if (operators.includes(lastChar)) {
            temStr = strToDisplay.slice(0, -1);
          }
          
        
        setStrToDisplay(temStr + val);
        setLastOperator(val);
        return;
      }


    if (val===".") {
      if (lastOperator) {

        const operatorIndex = strToDisplay.lastIndexOf
        (lastOperator);

        const numberAfterLastOperator = strToDisplay.slice(operatorIndex);

        if (numberAfterLastOperator.includes(".")) {
          return;
        }
      }

      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

        setStrToDisplay(strToDisplay + val);
    };

  return (

    <div>
   <div className="wrapper">
    <div className="circle"></div>
        <div className="calculator Prank">
           
            <Display strToDisplay={strToDisplay} />
            <BtnArea  handleOnButtonClick={handleOnButtonClick} />

        </div>
        </div>
        </div>
        );
        }

export default App;
