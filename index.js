import React from "react";
import * as ReactDOM from 'react-dom';

// child element
const elem1 = React.createElement(
    "h1",{
        id: 'childElem'
    },
    "Session 2"
);


// parent element
const elem = React.createElement(
    "div",{
        id: 'parentElem'
    },
    "Welcome to React Man..........",
    [elem1]
);


const root = ReactDOM.createRoot(container);
root.render(elem);

