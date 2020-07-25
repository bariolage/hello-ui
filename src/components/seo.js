import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO() {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteLanguage
            name
            description
            banner
            url
          }
        }
      }
    `
  )

  const schema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      name: meta.name,
      url: meta.url,
      description: meta.description,
    },
  ]

  return (
    <Helmet>
      {/* General tags */}
      <html lang={meta.siteLanguage} />
      <title>{meta.title}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <meta name="description" content={meta.description} />
      <meta name="image" content={meta.banner} />
      <link rel="canonical" href={meta.url} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export default SEO
