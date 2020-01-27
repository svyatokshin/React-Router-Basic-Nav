import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinks = styled.div`
  text-align: center;
`

const Navigation = () => {
  return (
    <StyledLinks>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="">Home</Link>
        </div>
        <div>
         <Link to="./About">About</Link>
        </div>
        <div>
        <Link to="./Contact">Contact</Link>
        </div>
      </div>
    </StyledLinks>
  );
};

export default Navigation;
