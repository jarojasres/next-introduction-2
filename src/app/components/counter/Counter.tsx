'use client'

import { useState } from "react";

interface Prop {
  value?: number;
}

export const Counter = ({value}: Prop) => {
  const [count, setCount] = useState(value || 0);
  return (
    <div className="flex">
      <h1>Contador</h1>
      <button onClick={() => setCount(count-1)}>-</button>
      <span className="text-2xl">{count}</span>
      <button onClick={() => setCount(count+1)}>+</button>
      </div>
  )
}
