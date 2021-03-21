import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProfileCard from "./ProfileCard";
import media from "./media";
import flowersImg from "../images/flowers.gif";
import brideImg from "../images/bride.jpg";
import groomImg from "../images/groom.jpeg";
import caro_1 from "../images/caro_1.jpg";
import caro_2 from "../images/caro_2.jpg";
import caro_3 from "../images/caro_3.jpg";
import caro_4 from "../images/caro_4.jpg";
import caro_5 from "../images/caro_5.jpg";
import caro_6 from "../images/caro_6.jpg";
import caro_7 from "../images/caro_7.jpg";
import caro_8 from "../images/caro_8.jpg";
import caro_9 from "../images/caro_9.jpg";
import caro_10 from "../images/caro_10.jpg";
import caro_11 from "../images/caro_11.jpg";

const ImageContainer = styled.div`
  height: 520px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

const CarouselImage1 = styled.img`
  height: 520px;
  width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    height: 260px;
    width: 200px;
  }
`;

const CarouselImage2 = styled.img`
  height: 400px;
  width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

const CarouselImage3 = styled.img`
  height: 550px;
  width: 450px;
  margin: auto;

  @media (max-width: 600px) {
    height: 275px;
    width: 225px;
  }
`;

const CarouselImage4 = styled.img`
  height: 400px;
  width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

const CarouselImage5 = styled.img`
  height: 400px;
  width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    height: 200px;
    width: 200px;
  }
`;

const CarouselImage6 = styled.img`
  height: 520px;
  width: 400px;
  margin: auto;

  @media (max-width: 600px) {
    height: 260px;
    width: 200px;
  }
`;

const CarouselImage7 = styled.img`
  height: 550px;
  width: 380px;
  margin: auto;

  @media (max-width: 600px) {
    height: 275px;
    width: 190px;
  }
`;

const CarouselImage8 = styled.img`
  height: 400px;
  width: 520px;
  margin: auto;

  @media (max-width: 600px) {
    height: 200px;
    width: 260px;
  }
`;

const CarouselImage9 = styled.img`
  height: 400px;
  width: 480px;
  margin: auto;

  @media (max-width: 600px) {
    height: 200px;
    width: 240px;
  }
`;

const CarouselImage10 = styled.img`
  height: 440px;
  width: 320px;
  margin: auto;

  @media (max-width: 600px) {
    height: 220px;
    width: 160px;
  }
`;

const CarouselImage11 = styled.img`
  height: 440px;
  width: 580px;
  margin: auto;

  @media (max-width: 600px) {
    height: 220px;
    width: 290px;
  }
`;

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      autoplay: true,
      autoplaySpeed: 2500,
      className: "center"
      // centerMode: true,
      // centerPadding: "350px",
    };
    return (
      <div>
        <Slider {...settings}>
          {/* <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={groomImg} alt="kuttan" />
          </div>
          <div>
            <Image style={{ height: 520, width: 400, margin: 'auto' }} src={brideImg} alt="kitty" />
          </div> */}
          <ImageContainer>
            <CarouselImage1 src={caro_1} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage2 src={caro_2} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage3 src={caro_3} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage4 src={caro_4} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage5 src={caro_5} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage6 src={caro_6} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage7 src={caro_7} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage8 src={caro_8} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage9 src={caro_9} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage10 src={caro_10} alt="kitty" />
          </ImageContainer>
          <ImageContainer>
            <CarouselImage11 src={caro_11} alt="kitty" />
          </ImageContainer>
        </Slider>
      </div>
    );
  }
}

const Container = styled.section`
  padding: 6rem 2rem;
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 3.5rem;
  margin-top: 1rem;
  margin: auto;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
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

const AboutUs = styled.p`
  text-align: center;
  padding: 30px;
  padding-top: 50px;
  font-weight: bold;
  font-size: 0.85em;
`;
const AbousUsLine = styled.line`
  text-align: justify;
`;

const LineBreak = styled.div`
  padding-bottom: 10px;

  ${media.phone`
    font-size: 20px;
  `}
`;

const QUERY = graphql`
  query fetchProfiles {
    event {
      profiles {
        description
        name
        links {
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
        <Title
          data-sal="slide-up"
          data-sal-delay="100"
          style={{ paddingBottom: "30px" }}
        >
          Our journey so far
        </Title>
      </TitleContainer>
      <AboutUs>
        <AbousUsLine>
          Met at university through a mutual dear friend and a roommate,
        </AbousUsLine>
        <LineBreak />
        <AbousUsLine>With coffee and cake on our first date,</AbousUsLine>
        <LineBreak />
        <AbousUsLine>To meet often we quite did't hesitate,</AbousUsLine>
        <LineBreak />
        <AbousUsLine>
          {" "}
          Eventually one taught guitar and the other singing,
        </AbousUsLine>
        <LineBreak />
        <AbousUsLine> And we were each others band mates,</AbousUsLine>
        <LineBreak />
        <AbousUsLine>
          {" "}
          The website you are viewing now was one of our efforts to collaborate,
        </AbousUsLine>
        <LineBreak />
        <AbousUsLine> Lot of things about each other we love,</AbousUsLine>
        <LineBreak />
        <AbousUsLine> Some we appreciate, some we frustrate,</AbousUsLine>
        <LineBreak />
        <AbousUsLine> With your blessings and love,</AbousUsLine>
        <LineBreak />
        <AbousUsLine>
          {" "}
          We look forward to the many journeys we will navigate, as each others
          soul mate.
        </AbousUsLine>
        <LineBreak />
        <AbousUsLine> </AbousUsLine>
        <LineBreak />
      </AboutUs>
      <SimpleSlider />
    </Container>
  );
}

export default Profile;
