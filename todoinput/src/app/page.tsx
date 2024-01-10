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
      <div className="flex flex-col items-center gap-4 w-[600px] h-[600px] rounded-2xl bg-white">
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
        <div className="flex gap-12">
          <div className="w-[150px] h-[300px] bg-slate-200 rounded-3xl px-6 flex justify-between flex-row">
            To Do
            <button className="bg-green-400 w-6 h-6 rounded-full">+</button>
            <hr className="" />
          </div>
          <div className="w-[150px] h-[300px] bg-slate-200 rounded-3xl px-6 flex items-center flex-col">
            <h1>In Progress</h1>
            <div className="flex flex-col rounded-3xl w-[120px] bg-white p-2">
              <h1>static</h1>
              <h1>artur</h1>
              <h1>date added</h1>
            </div>
          </div>
          <div className="w-[150px] h-[300px] bg-slate-200 rounded-3xl px-6">
            Done
          </div>
        </div>
      </div>
    </main>
  );
}
