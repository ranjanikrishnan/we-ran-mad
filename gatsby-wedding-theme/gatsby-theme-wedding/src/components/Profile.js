import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProfileCard from "./ProfileCard";
import media from "./media";
import flowersImg from "../images/flowers.gif";
import brideImg from "../images/bride.jpg";
import groomImg from "../images/groom.jpg";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2500,
      className: "center",
      // centerMode: true,
      // centerPadding: "350px",
  };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={groomImg} alt="kuttan" />
          </div>
          <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={brideImg} alt="kitty" />
          </div>
          <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={brideImg} alt="kitty" />
          </div>
          <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={brideImg} alt="kitty" />
          </div>
        </Slider>
      </div>
    );
  }
}

const Container = styled.section`
  padding: 6rem 2rem;
`;

const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin-top: 1rem;
  margin: 'auto'
`;

const Image = styled.img`
  width: 8rem;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  ${media.phone`
    flex-direction: column;
  `}
`;

const QUERY = graphql`
  query fetchProfiles {
    event {
      profiles {
        description
        name
        links {
          facebook
          instagram
        }
      }
    }
  }
`;

function Profile() {
  const {
    event: { profiles }
  } = useStaticQuery(QUERY);
  return (
    <Container>
      <TitleContainer>
        <Image src={flowersImg} alt="flowers" />
        <Title data-sal="slide-up" data-sal-delay="200">
          Bride & Groom
        </Title>
      </TitleContainer>
      <CardContainer>
        <ProfileCard image={brideImg} {...profiles[0]} />
        <ProfileCard image={groomImg} {...profiles[1]} />
      </CardContainer>
      <TitleContainer>
        <Title data-sal="slide-up" data-sal-delay="100">
            Our journey so far...
        </Title>
      </TitleContainer>
      <SimpleSlider />
    </Container>
  );
}

export default Profile;
