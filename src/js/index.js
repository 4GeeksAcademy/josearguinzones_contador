//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let unidad=0;
let decimales=0;
let centenas=0;
let miles=0;
//render your react application
setInterval(() => {
    unidad++;
    if(unidad>9){
        unidad=0;
        decimales++;
    }
    if(decimales>9){
        decimales=0;
        centenas++;
    }
    if(centenas>9){
        centenas=0;
        miles++;
    }
    ReactDOM.render(<Home unidad={unidad} decimales={decimales} centenas={centenas} miles={miles}/>, document.querySelector("#app"));
}, 1000);

