//import react 
import React from "react";
import ReactDOM from "react-dom";

// include your styles 
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
