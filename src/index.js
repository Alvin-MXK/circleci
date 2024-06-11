import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const element = {
//     type: "h1",
//     props: {
//         title: "foo",
//         children: "Hello",
//     },
// };
//
// const container = document.getElementById("root");
//
// const node = document.createElement(element.type);
// node["title"] = element.props.title;
//
// const text = document.createTextNode("");
// text["nodeValue"] = element.props.children;
//
// node.appendChild(text);
// container.appendChild(node);

const element = React.createElement(
    "div",
    { id: "foo" },
    React.createElement("a", null, "bar"),
    React.createElement("b", null, "=====")
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
