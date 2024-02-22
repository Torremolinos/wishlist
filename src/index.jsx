import React from "react"; // import the react package to use the react library 
// import ReactDOM from "react-dom"; // import the react-dom package to render the app to the DOM (Document Object Model) of the browser window  
import { createRoot } from "react-dom"; // import the react-dom package to render the app to the DOM (Document Object Model) of the browser window
import App from "./App"; // import the App component from the App.js file

createRoot(document.getElementById('root')).render(<App />);


// ReactDOM.render(
//     <div>My Whislist from REACT</div>, // render the h1 element with the text "Hello, world!" to the DOM
//     document.getElementById("root") // render the h1 element to the root element of the HTML file
// ); // render the app to the DOM es codigo jsx.
