//This file is your entry point for the dev server.  It renders App.jsx which can be anything you want for your first React component.
//This file stays relatively untouched.


import './styles.scss';
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App.jsx"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,  
document.getElementById('root'));