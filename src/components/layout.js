/** @jsx jsx */
import { jsx, NavLink } from "theme-ui"
import { Fragment } from "react"
import { Link } from "gatsby"

export default ({ children }) => {
  return (
    <Fragment>
      <header>
        <NavLink to="/" as={Link}>
          <h1>hello world</h1>
        </NavLink>
      </header>
      <main>{children}</main>
    </Fragment>
  )
}
