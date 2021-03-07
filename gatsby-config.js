module.exports = {
  siteMetadata: {
    title: "weranmad"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-191460202-1"
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: require.resolve(`./gatsby-wedding-theme/gatsby-theme-wedding`),
      options: {
        contentPath: `./gatsby-wedding-theme/gatsby-theme-wedding/data`,
        basePath: "/event"
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "weranmad-wedding",
        region: "eu-central-1"
      }
    }
  ]
};
