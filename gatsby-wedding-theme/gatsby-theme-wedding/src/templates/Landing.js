import React, { Fragment, useEffect } from "react";
import sal from "sal.js";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Cover from "../components/Cover";
import Map from "../components/Map";
import CountdownSection from "../components/CountdownSection";
import Profile from "../components/Profile";
import Rsvp from "../components/Rsvp";
import Video from "../components/Video";

const Landing = () => {
  useEffect(() => {
    sal();
  });
  return (
    <Fragment>
      <SEO />
      <Layout>
        <Cover />
        <Profile />
        <CountdownSection />
        <Map />
        <Video
          videoSrcURL="https://www.youtube.com/embed/wpiNbM28Dzc"
          videoTitle="Maddy-Ranj Wedding"
        />
        <Rsvp />
      </Layout>
    </Fragment>
  );
};

export default Landing;
