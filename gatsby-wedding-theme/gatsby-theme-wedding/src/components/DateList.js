import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendar,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import AddToCalendar from "./AddToCalendar";
import { graphql, useStaticQuery } from "gatsby";

const OuterContainer = styled.div`
  display: inline-block;
  text-align: center;
  // padding-bottom: 300px;
`;

const Container = styled.div`
  margin-bottom: 5rem;
  float: left;
  padding: 50px;
  padding-top: 0px;

  display: inline-block;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.primary};
  margin-right: 1rem;
  opacity: 0.8;
`;

const List = styled.ul`
  list-style-type: none;
  // margin: 0;
  // padding: 8px;
  // display:inline-block;
  text-align: center;
`;

const ListItem = styled.li`
  // padding-right: 80px;
  &:not(:first-child) {
    // margin: 3rem 0 0;
    // padding-left: 80px;
    // padding-right: 80px;
  }
`;

const TooltipText = styled.div`
  // background: white;
  // color: black;
  // width: 200px;
  // // text-align: center;
  // line-height: 30px;
  // border-radius: 3px;
  // cursor: pointer;

  &:not(:last-child) {
    padding-bottom: 12px;
  }
`;

const TooltipBox = styled.div`
  z-index: 1;
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    width: 230px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent rgba(0, 0, 0, 0.8)
        rgba(0, 0, 0, 0.8);
    }
  }
`;

const QUERY = graphql`
  query {
    event {
      events {
        title
        occasion {
          name
          place {
            name
          }
          time
        }
        calendar {
          google
        }
        description {
          name
          people
          time
          tooltip
        }
      }
    }
  }
`;

function DateList() {
  const {
    event: { events }
  } = useStaticQuery(QUERY);

  return (
    <OuterContainer>
      <Fragment>
        {events.map(event => (
          <Container key={event.title}>
            <SectionTitle>
              <StyledIcon icon={faCalendar} color="red" />
              <span> {event.title}</span>
            </SectionTitle>
            <List>
              <ListItem key={event.occasion.name}>
                <span>{event.occasion.name} </span>
                <p>
                  {event.description.map(d => (
                    <TooltipCard>
                      <TooltipText>
                        {d.name} {d.people} {d.time}{" "}
                      </TooltipText>
                      {d.tooltip ? (
                        <TooltipBox> {d.tooltip} </TooltipBox>
                      ) : (
                        <div />
                      )}
                    </TooltipCard>
                  ))}
                </p>
                <p>
                  <StyledIcon icon={faMapMarkerAlt} />
                  <strong> {event.occasion.place.name}</strong>
                </p>
                <p>
                  <StyledIcon icon={faClock} />
                  <strong> {event.occasion.time}</strong>
                </p>
              </ListItem>
            </List>
            <AddToCalendar google={event.calendar.google} />
          </Container>
        ))}
      </Fragment>
    </OuterContainer>
  );
}

export default DateList;
