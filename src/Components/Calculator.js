import { useState } from "react";
import { Button } from "./Buttons";
export const Calculator = () => {
  let newValue = "";

  const [displayValue, setDisplayValue] = useState("");
  const [latestOperator, setLastOperator] = useState("");
  const [numberset, setNumberSet] = useState("");
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "C",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];
  const operators = ["+", "-", "%", "/", "*"];

  const handleClickedButton = (val) => {
    setNumberSet(displayValue + val);

    // console.log("Button clicnked", val);

    if (operators.includes(val) && !displayValue.length) {
      return setDisplayValue("0");
    }
    if (val === "AC") {
      return setDisplayValue("");
    }

    if (val === "C") {
      console.log(displayValue.charAt(displayValue.length - 1));
      if (displayValue.charAt(displayValue.length - 1) === "0") {
        return;
      }
      newValue = displayValue.slice(0, -1);

      return setDisplayValue(newValue);
    }
    if (val === ".") {
      console.log("my numberset is", numberset);
      // console.log(latestOperator, "this is the latest operator");
      const lastCharacter = displayValue.slice(-1);
      const indexOflastOperator = displayValue.lastIndexOf(latestOperator);
      console.log("the index of last operator is", indexOflastOperator);
      if (numberset.includes(".")) return;
      if (displayValue.includes(val) && operators.includes(lastCharacter)) {
        // console.log("yes it includes lastcharacter");
        newValue = displayValue.slice(0, -1);
        return setDisplayValue(newValue + val);
      }
    }
    if (operators.includes(val)) {
      // latestOperator = val;
      setNumberSet("");
      console.log("my new numberset when I clicked operators ", numberset);
      setLastOperator(val + "");
      // console.log("display value", displayValue);
      // console.log("latestoperator is", latestOperator);
      const lastCharacter = displayValue.slice(-1);
      // console.log("latest OPerator", latestOperator);
      // console.log("this is a display value", displayValue);
      // console.log("this is a last character", lastCharacter);
      // console.log("");
      if (operators.includes(lastCharacter)) {
        // newValue = setDisplayValue(displayValue + val);
        newValue = displayValue.slice(0, -1);
        // newValue = setDisplayValue(newValue + val);
        // console.log("inside loop");
        // console.log(newValue);

        return setDisplayValue(newValue + val);
      }
    }
    if (val === "=") {
      const lastCharacter = displayValue.charAt(displayValue.length - 1);
      if (operators.includes(lastCharacter)) return;
      console.log("check", displayValue);
      if (displayValue === "0") {
        return;
      }
      let totalValue = eval(displayValue).toString();
      setDisplayValue(totalValue + 0);
      return setDisplayValue(totalValue + "");
    }
    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleClickedButton={handleClickedButton}
          />
        ))}
      </div>
    </div>
  );
};
