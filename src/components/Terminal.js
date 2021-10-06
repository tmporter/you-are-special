import React, { useState } from "react";
import styled from "styled-components";
import PromptInput from "./PromptInput";

const Wrapper = styled.div`
  z-index: 0;
  width: 0;
  height: 0;
  position: relative;
`;

const Background = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: rgb(30, 30, 30); // darkest
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  z-index: 0;
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  position: absolute;

  display: flex;
  flex-direction: column;
`;

const MessageList = styled.div`
  z-index: 10;
  padding: 0 1rem 0 1rem;
  overflow-y: auto;
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Message = styled.div.attrs({ className: "message" })`
  /* width: 100%; */
`;

const Terminal = () => {
  const [userInput, setUserInput] = useState("");
  const [history, setHistory] = useState(["Is anyone there?", "zzabcdefg"]);

  const newMessage = (message) => {
    setHistory([...history, message]);
  };

  return (
    <Wrapper id="yas-wrapper">
      <Background id="yas-background" />
      <Content>
        <MessageList id="yas-message-list">
          {history.map((h, i) => (
            <Message key={i}>{h}</Message>
          ))}
        </MessageList>
        <PromptInput
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onEnterPress={(message) => {
            newMessage(message);
            setUserInput("");
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default Terminal;
