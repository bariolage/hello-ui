import React, { useState, useContext } from "react"
import Layout from "./components/layout"

export const Context = React.createContext()
export const useAppContext = () => useContext(Context)

export const Root = props => {
  const [state, setState] = useState(null)
  const context = {
    state,
    setState,
  }

  return <Context.Provider value={context}>{props.children}</Context.Provider>
}

export const wrapRootElement = ({ element, props }) => (
  <Root {...props}>{element}</Root>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
