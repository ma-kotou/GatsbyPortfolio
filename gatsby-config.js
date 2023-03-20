/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `M.K`,
    description: `2020年から2023年までの制作実績サイトです。`,
    author: `Mai Kotou`,
    user: { name: 'M.kotou', email: 'm.kotou0715@gmail.com' },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
        },
      },
    },
      `gatsby-plugin-transition-link`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-remark-images`,
      `gatsby-plugin-sharp`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        resetCSS: true,
      }
    }],
}
