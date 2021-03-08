/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Hero from "../components/hero"
import About from "../components/about"
import Timeline from "../components/timeline"
import Nav from "../components/nav"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Gerardo Sabetta",
    url: site.siteUrl,
    image: "",
    sameAs: [
      "https://twitter.com/gerardosabetta",
      "https://www.linkedin.com/in/gerardosabetta/",
      site.siteMetadata.siteUrl,
      "https://www.youtube.com/channel/UCBrNBQXUY5o5JKORIX9Irag",
    ],
    jobTitle: "Web Developer",
  }
  return (
    <Fragment>
      <Layout>
        <Nav />
        <Hero />
        <About />
        <Timeline />
        <Footer />
      </Layout>
      <SEO title="Home" schemaMarkup={schema} />
    </Fragment>
  )
}

export default IndexPage
