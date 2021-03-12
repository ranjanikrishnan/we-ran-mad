import React from "react";
import styled from "styled-components";

import DateList from "./DateList";
import media from "./media";
import animationParams from "./animation-params";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.section`
  height: 100vh;
  display: flex;
  padding-bottom: 0.5rem;

  & > * {
    flex: 1 100%;
  }

  ${media.phone`
    height: auto;
    flex-direction: column-reverse;
  `}
`;

const TextContainer = styled.div`
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 400;
`;

const MapContainer = styled.div`
  padding: 1rem 2rem;
  border-color: grey;
  border-top-style: inset;
  z-index: +1;
`;

const GoogleMap = styled.iframe`
  border: 1;
  width: 100%;
  height: 250px;
`;

const QUERY = graphql`
  query {
    event {
      events {
        occasion {
          place {
            map
          }
        }
      }
    }
  }
`;

function Map() {
  const {
    event: { events }
  } = useStaticQuery(QUERY);
  return (
    <div>
    <MapContainer>
    <GoogleMap
      src={events[0].occasion.place.map}
      frameBorder="0"
      allowfullscreen=""
    ></GoogleMap>
    </MapContainer>
    <Container>
      <TextContainer>
        <Heading {...animationParams}>When & Where</Heading>
        <DateList />
      </TextContainer>
    </Container>
    </div>
  );
}

export default Map;
