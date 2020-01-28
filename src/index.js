import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const StyledLinks1 = styled.div`
  text-align: center;
`

const rootElement = document.getElementById(
    "root"
);
ReactDOM.render(
    <Router>
        <StyledLinks1>
            <App />
        </StyledLinks1>
    </Router>,
    rootElement
);
