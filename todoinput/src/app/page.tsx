"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount((prev) => prev - 1);
  };
  const sub = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className="flex justify-center w-screen h-screen items-center bg-slate-400">
      <div className="flex flex-col items-center gap-4 w-[600px] h-[150px] rounded-2xl bg-white">
        <h1>todo application</h1>
        <p>Count :{count}</p>
        <div className="flex gap-4">
          <button className="bg-blue-400 rounded-full w-12" onClick={add}>
            -1
          </button>
          <button className="bg-green-400 rounded-full w-12" onClick={sub}>
            +1
          </button>
        </div>
      </div>
    </main>
  );
}
