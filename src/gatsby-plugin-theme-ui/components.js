/** @jsx jsx */
import { jsx } from "theme-ui"

export default {
  div: props => {
    console.log(props)
    return <div {...props} />
  },
  img: props => {
    console.log(props)
    return <img {...props} />
  },
}
