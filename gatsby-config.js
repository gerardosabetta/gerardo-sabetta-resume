module.exports = {
  siteMetadata: {
    title: `Gerardo Sabetta | Web developer`,
    description: `Profesional Web developer, frontend engineer, web developer and online educator`,
    author: `@gerardosabetta`,
    siteUrl: "https://www.gerardosabetta.com/",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-RZVWW7ZX08",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `gerardo-sabetta-resume`,
        short_name: `Gerardo Sabetta`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
