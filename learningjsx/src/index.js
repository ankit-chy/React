// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  // let message = 'Khuda Haafiz!';
  // if(Math.random() > 0.5)
  // {
  //   message = 'Sayonara!';
  // }
  // return <h1>{message}</h1>;

  // const date = new Date();
  // const time = date.toLocaleTimeString();
  // return <h1>{time}</h1>;

 // return <h1>{new Date().toLocaleTimeString()}</h1>
    const name = 'Ankit';
    const age = 23;
    return(
      <h1>Hi, My Name is {name} and I am {age} years old!</h1>
    )

}

// 5) Show the component on the screen
root.render(<App />);
