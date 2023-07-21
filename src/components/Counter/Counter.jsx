import React, { useState } from "react";

import s from "./Counter.module.css";

function Counter() {
  // переменная = так и называется
  // а ф-ция set<название переменной с большой буквы>
  const [counter, setCounter] = useState(0);

  const increment = (value) => () => {
    setCounter((prev) => prev + value);
  };

  const decrement = (value) => {
    setCounter((prev) => prev - value);
  };

  const divideTwo = () => {
    setCounter(counter / 2);
  };

  const equalZero = (event) => {
    console.log('event: ', event);
    setCounter(0);
  };

  //   кнопка + 10
  //   кнопка / 2
  //   кнопка = 0

  return (
    <div className={s.counter}>
      <div className={s.value}>{counter}</div>
      <div className={s.buttons}>
        <button className={s.button} onClick={increment(5)}>
          +
        </button>
        <button className={s.button} onClick={() => decrement(5)}>
          -
        </button>
        <button className={s.button} onClick={equalZero}>
          0
        </button>
      </div>
    </div>
  );
}

export default Counter;
