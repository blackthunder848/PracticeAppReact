"use client"
import React from 'react';

export default function Home() {
  let sum=0;
  for (let i = 0; i < 6; i++) {
    
    sum=sum+i;
    }
    console.log("Sum of 5 number", sum);
  const showAlert = () => {
    alert('Button clicked!');
  };

  const showPrompt = () => {
    
    const userInput = window.prompt('Please enter something:');
    if (userInput !== null) {
      const number = parseInt(userInput);

      if (!isNaN(number)) {
        if (number % 2 === 0) {
          alert(`${number} is an even number.`);
        } else {
          alert(`${number} is an odd number.`);
        }
      } else {
        alert('Please enter a valid number.');
      }
    
  } 
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <div>
        <button
          type="button"
          className="m-2.5 rounded-md p-2.5 text-gray-700 bg-black"
          onClick={showAlert}
        >
          Alert
        </button>
        <button
          type="button"
          className="m-2.5 rounded-md p-2.5 text-gray-700 bg-black"
          onClick={showPrompt}
        >
          Prompt
        </button>
        <h1>Hello World</h1>
      </div>
    </main>
  );
}
