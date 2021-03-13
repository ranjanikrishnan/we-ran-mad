import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

function Rsvp() {
  return (
    <>
      <form
        action="https://getform.io/f/cf23c1b8-470d-4ee4-b746-da7cbcccd4fe"
        method="POST"
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default Rsvp;
