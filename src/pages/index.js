/** @jsx jsx */
import { jsx, Flex, NavLink, Styled } from "theme-ui"
import { Link, graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

export default ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Flex>
      <ul>
        {nodes.map(node => (
          <Styled.li key={node.fields.slug}>
            <NavLink as={Link} to={node.fields.slug}>
              {node.frontmatter.title}
            </NavLink>
          </Styled.li>
        ))}
      </ul>
    </Flex>
  )
}

export const indexQuery = graphql`
  query {
    allMdx {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
