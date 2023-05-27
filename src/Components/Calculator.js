import { useState } from "react";
import { Button } from "./Buttons";
export const Calculator = () => {
  let newValue = "";
  let latestOperator = "";
  const [displayValue, setDisplayValue] = useState("");
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
      const lastCharacter = displayValue.slice(-1);

      if (displayValue.includes(".") || !displayValue.length) {
        console.log("Yes it includes");
        return;
      }

      if (displayValue.includes(val) && operators.includes(lastCharacter)) {
        // console.log("yes it includes lastcharacter");
        newValue = displayValue.slice(0, -1);
        return setDisplayValue(newValue + val);
      }
    }
    if (operators.includes(val)) {
      latestOperator = val;
      const lastCharacter = displayValue.slice(-1);
      console.log("latest OPerator", latestOperator);
      console.log("this is a display value", displayValue);
      console.log("this is a last character", lastCharacter);
      console.log("");
      if (operators.includes(lastCharacter)) {
        // newValue = setDisplayValue(displayValue + val);
        newValue = displayValue.slice(0, -1);
        // newValue = setDisplayValue(newValue + val);
        console.log("inside loop");
        console.log(newValue);

        return setDisplayValue(newValue + val);
      }
    }
    if (val === "=") {
      const lastCharacter = displayValue.charAt(displayValue.length - 1);
      if (operators.includes(lastCharacter)) return;

      console.log("check", displayValue);
      if (displayValue)
        if (displayValue === "0") {
          return;
        }
      let totalValue = eval(displayValue).toString();
      setDisplayValue(totalValue + 0);
      //   console.log(displayValue);
      //   console.log(totalValue);
      //   console.log(displayValue);
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
