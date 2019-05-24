module.exports = {
  /* General Information */
  siteMetadata: {
    title: "devreekendra.io",
    author: "Reekendra"
  },
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics"
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",

    /* Must be placed at the end */
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
