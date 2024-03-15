import React from "react";
import { styled } from "styled-components";

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  margin-top: 3px;
  padding: 10px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;
  font-size: 13px;
`;
export default Button;
