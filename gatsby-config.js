module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/welcome`,
        mdxOtherwiseConfigured: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-double-brackets-link",
            options: {
            stripBrackets: true
            }
          },
          "gatsby-remark-double-parenthesis-link",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 561,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              className: "autolink"
            },
          },
          `@weknow/gatsby-remark-twitter`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              quality: 80
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '+',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bf.wtf`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `utils/typography`,
      },
    },
  ],
  siteMetadata: {
    title: `bf.wtf`,
    author: `Ben Follington`,
    description: `Thoughts from on life, self-optimisation, making video games, music, software engineering, user interfaces and more.`,
    siteUrl: `https://bf.wtf`,
    social: {
      twitter: `vivavolt`,
    },
  },
}
