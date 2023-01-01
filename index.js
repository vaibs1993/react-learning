import React from "react";
// import { ReactDOM } from "react-dom/client";
import * as ReactDOM from 'react-dom';



console.log(React);
console.log(ReactDOM);


const elem = React.createElement(
    "div",{
        id: 'parentElem'
    },
    "Welcome to React Man.........."
);

const root = ReactDOM.createRoot(container);
root.render(elem);

