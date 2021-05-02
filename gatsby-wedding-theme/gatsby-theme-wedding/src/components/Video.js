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

const VideoContainer = styled.div`
  height: 450px;
`;

const IFrame = styled.iframe`
  height: 70%;
  width: 70%;
  border: none;
  // overflow:hidden;

  @media (max-width: 500px) {
    width: 70%;
    margin-top: 0;
  }
`;

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <Container>
    <TitleContainer>
      <Title style={{ paddingBottom: "30px" }}>
        Join us virtually on the 9th! :)
      </Title>
    </TitleContainer>
    <VideoContainer>
      <IFrame
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </VideoContainer>
  </Container>
);
export default Video;
