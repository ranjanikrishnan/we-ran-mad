import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 900,
  fontSize: "1.25rem"
};
const headingAccentStyles = {
  color: "#663399"
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Oops!
        <br />
        <br />
        <span style={headingAccentStyles}>
          {" "}
          Looks like you stumbled upon no man's / woman's land
        </span>
        <span role="img" aria-label="Party popper emojis">
          <br />
          <br />
          Let us take you back to our <a href="/event">wedding event</a>
        </span>
      </h1>
    </main>
  );
};

export default NotFoundPage;
