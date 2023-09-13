import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={restart}>Restart</button>
      <button onClick={switchSigns}>Switch</button>
    </>
  );
};

export default Counter;
