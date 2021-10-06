import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  padding: 0 1rem 1rem 1rem;
  display: flex;
`;

const StyledInput = styled.input`
  width: 100%;

  background: none;
  border: 0;
  padding: 0;
  margin-left: 0.6rem;

  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

const PromptInput = ({ value, onChange, onEnterPress }) => {
  const ref = useRef();

  const refocus = () => {
    console.log("refocus");
    ref.current.focus();
  };

  useEffect(() => refocus(), []);

  const handleEnterPress = (e) => {
    e.preventDefault();
    onEnterPress(value);
  };

  return (
    <StyledForm onSubmit={handleEnterPress}>
      <span>{`>`}</span>
      <StyledInput
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={refocus}
      />
    </StyledForm>
  );
};

export default PromptInput;
