/** @jsx jsx */
import { jsx, NavLink, Flex } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data, pageContext }) => {
  const {
    mdx: {
      body,
      excerpt,
      frontmatter: { title },
    },
  } = data
  const { previous, next } = pageContext
  return (
    <article>
      <MDXRenderer>{body}</MDXRenderer>
      <Flex as="ul">
        {previous && (
          <li>
            <NavLink to={previous.fields.slug} as={Link}>
              Previous
            </NavLink>
          </li>
        )}
        {next && (
          <li>
            <NavLink to={next.fields.slug} as={Link}>
              Next
            </NavLink>
          </li>
        )}
      </Flex>
    </article>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
