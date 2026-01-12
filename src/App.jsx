import { useState } from "react";
import "./App.css";
import { LucideDelete } from "lucide-react";

export const App = () => {
  const [input, setInput] = useState("0");

  const handleClick = (value) => {
    if (input === "0") {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput("0");
  };

  const handleResult = () => {
    if (input.endsWith("%")) {
      const number = Number(input.slice(0, -1));
      const result = number / 100;
      setInput(result.toString());
      return;
    } else {
      try {
        const numbers = input.split(/[\+\-\*\/]/).map(Number);
        const operators = input.match(/[\+\-\*\/]/g);

        if (!operators) {
          setInput(input);
          return;
        }

        let result = numbers[0];

        for (let i = 0; i < operators.length; i++) {
          const nextNumber = numbers[i + 1];

          switch (operators[i]) {
            case "+":
              result += nextNumber;
              break;
            case "-":
              result -= nextNumber;
              break;
            case "*":
              result *= nextNumber;
              break;
            case "/":
              result /= nextNumber;
              break;
            default:
              break;
          }
        }
        setInput(result.toString());
      } catch (error) {
        setInput("Error");
      }
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const buttonStyle =
    "bg-[#393e46] hover:bg-gray-500 text-white font-bold py-4 rounded-lg text-xl cursor-pointer shadow-md shadow-black transition";
  const operatorButtonStyle =
    "bg-[#FF9F0A] hover:bg-[#E68A00] flex items-center justify-center text-white font-bold py-4 rounded-lg text-xl cursor-pointer shadow-md shadow-black transition";

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#afddff]">
        <div className="bg-[#222831] py-8 px-7 rounded-xl shadow-xl w-90 text-white">
          <div className="text-right my-4 text-[40px] w-full overflow-hidden">
            {input || "0"}
          </div>
          <hr className="border-gray-600"></hr>
          <div className="grid grid-cols-4 gap-4 mt-3">
            <button onClick={handleClear} className={operatorButtonStyle}>
              AC
            </button>
            <button onClick={handleBackspace} className={operatorButtonStyle}>
              <LucideDelete />
            </button>
            <button
              onClick={() => handleClick("%")}
              className={operatorButtonStyle}
            >
              %
            </button>
            <button
              onClick={() => handleClick("/")}
              className={operatorButtonStyle}
            >
              /
            </button>

            <button onClick={() => handleClick("7")} className={buttonStyle}>
              7
            </button>
            <button onClick={() => handleClick("8")} className={buttonStyle}>
              8
            </button>
            <button onClick={() => handleClick("9")} className={buttonStyle}>
              9
            </button>
            <button
              onClick={() => handleClick("*")}
              className={operatorButtonStyle}
            >
              *
            </button>

            <button onClick={() => handleClick("4")} className={buttonStyle}>
              4
            </button>
            <button onClick={() => handleClick("5")} className={buttonStyle}>
              5
            </button>
            <button onClick={() => handleClick("6")} className={buttonStyle}>
              6
            </button>
            <button
              onClick={() => handleClick("-")}
              className={operatorButtonStyle}
            >
              -
            </button>

            <button onClick={() => handleClick("1")} className={buttonStyle}>
              1
            </button>
            <button onClick={() => handleClick("2")} className={buttonStyle}>
              2
            </button>
            <button onClick={() => handleClick("3")} className={buttonStyle}>
              3
            </button>
            <button
              onClick={() => handleClick("+")}
              className={operatorButtonStyle}
            >
              +
            </button>

            <button
              onClick={() => handleClick("0")}
              className={`${buttonStyle} col-span-2`}
            >
              0
            </button>
            <button onClick={() => handleClick(".")} className={buttonStyle}>
              .
            </button>
            <button onClick={handleResult} className={operatorButtonStyle}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
