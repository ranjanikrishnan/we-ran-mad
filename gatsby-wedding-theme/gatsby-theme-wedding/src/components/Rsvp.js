import React from "react";
import styled from "styled-components";
import { Title, TitleContainer } from "./Profile";

const Container = styled.div`
  margin-bottom: 5rem;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const InputText = styled.input`
  width: 70%;
  // width: 500px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;

  @media (max-width: 500px) {
    width: 70%;
    margin-top: 0;
  }
`;

const Button = styled.button`
  // width: 500px;
  // padding: 12px;
  // resize: vertical;
  // background-color: grey;
  // align-items: center;

  width: 70%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background-color: #005e53;
  color: white;
  font-size: 20px;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
  }

  &:hover {
    background-color: #005e8d;
  }
`;

const Col25 = styled.div`
  float: left;
  width: 25%;
  margin-top: 6px;
  text-align: left;
  // padding: 10px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Col75 = styled.div`
  float: left;
  width: 75%;
  margin-top: 6px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
  }
`;

const Label = styled.label`
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

const RadioLabel = styled.label`
  // display: block;
  // position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  // font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  // padding: 12px;
  // border: 1px solid #ccc;
  // border-radius: 4px;
  resize: vertical;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
  }
`;

const TextArea = styled.textarea`
  height: 100px;
  width: 70%;
  // width: 500px;
  padding: 12px;
`;

const RadioContainer = styled.div`
  // float: none;
  text-align: left;
  padding: 12px;
  padding-left: 100px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0;
    padding-left: 0px;
  }
`;

function Rsvp() {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>R.S.V.P.</Title>
          {/* <p>Please sign your R.S.V.P or let us know if we can help you with anything</p> */}
        </TitleContainer>
        <form
          action="https://getform.io/f/cf23c1b8-470d-4ee4-b746-da7cbcccd4fe"
          method="POST"
        >
          <Row>
            <Col25>
              <Label for="fname">Full name</Label>
            </Col25>
            <Col75>
              <InputText type="text" name="name" />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <Label for="fname">Number of Guests</Label>
            </Col25>
            <Col75>
              <InputText type="text" name="count" />
            </Col75>
          </Row>
          <Row>
            <Col25>
              <Label for="fname">Will you be attending our wedding?</Label>
            </Col25>
            <Col75>
              <RadioContainer>
                <table>
                  <tr>
                    <th style={{ padding: "10px" }}>
                      <RadioLabel>
                        <input
                          type="radio"
                          checked="checked"
                          name="attendance"
                          value="yes"
                        />
                        <span class="checkmark"></span>
                        Yes, I will be there😊
                      </RadioLabel>
                    </th>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px" }}>
                      <RadioLabel>
                        <input type="radio" name="attendance" value="virtual" />
                        <span class="checkmark"></span>
                        I'll attend virtually😉
                      </RadioLabel>
                    </th>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px" }}>
                      <RadioLabel>
                        <input type="radio" name="attendance" value="no" />
                        <span class="checkmark"></span>
                        Sorry, can't make it😞
                      </RadioLabel>
                    </th>
                  </tr>
                </table>
              </RadioContainer>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <Label for="fname">Any message for us?</Label>
            </Col25>
            <Col75>
              <TextArea name="message"></TextArea>
            </Col75>
          </Row>
          <Row>
            <Col25>
              <Label for="fname"></Label>
            </Col25>
            <Col75>
              <Button type="submit">Send</Button>
            </Col75>
          </Row>
        </form>
      </Container>
    </>
  );
}

export default Rsvp;
