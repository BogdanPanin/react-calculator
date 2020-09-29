import React from "react";
import "./scss/base.scss";
import "./scss/calculator.scss";
import { Button } from "./components";

function App() {
  const [count, setCount] = React.useState("");
  return (
    <div className="calculator">
      <div className="calculator__result">
        <div>{count}</div>
      </div>
      <div className="calculator__flex">
        <Button gray onClick={() => setCount("")}>
          AC
        </Button>
        <Button
          gray
          onClick={() => {
            setCount((count * -1).toString());
          }}
        >
          +/-
        </Button>
        <Button gray onClick={() => setCount(Math.sqrt(count))}>
          √
        </Button>
        <Button orange onClick={() => setCount(count + "/")}>
          ÷
        </Button>
        <Button black onClick={() => setCount(count + 7)}>
          7
        </Button>
        <Button black onClick={() => setCount(count + "8")}>
          8
        </Button>
        <Button black onClick={() => setCount(count + "9")}>
          9
        </Button>
        <Button orange onClick={() => setCount(count + "*")}>
          ×
        </Button>
        <Button black onClick={() => setCount(count + "4")}>
          4
        </Button>
        <Button black onClick={() => setCount(count + "5")}>
          5
        </Button>
        <Button black onClick={() => setCount(count + "6")}>
          6
        </Button>
        <Button orange onClick={() => setCount(count + "-")}>
          -
        </Button>
        <Button black onClick={() => setCount(count + "1")}>
          1
        </Button>
        <Button black onClick={() => setCount(count + "2")}>
          2
        </Button>
        <Button black onClick={() => setCount(count + "3")}>
          3
        </Button>
        <Button orange onClick={() => setCount(count + "+")}>
          +
        </Button>
        <Button
          Style={{ flexGrow: "3" }}
          onClick={() => setCount(count + "0")}
          black
        >
          0
        </Button>
        <Button
          Style={{ flexGrow: "0" }}
          black
          onClick={() => {
            setCount(count + ".");
          }}
        >
          ,
        </Button>
        <Button
          Style={{ flexGrow: "0" }}
          orange
          onClick={() =>
            setCount(
              String(eval(count)).length > 3 &&
                String(eval(count)).includes(".")
                ? String(eval(count).toFixed(4))
                : String(eval(count))
            )
          }
        >
          =
        </Button>
      </div>
    </div>
  );
}

export default App;
