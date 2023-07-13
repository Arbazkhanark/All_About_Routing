import React from 'react'
import Navigation from './Navigation'

const Layout = ({children}) => {
  return (
    <>
        <Navigation />
        <hr />
        {children}
        <br />
    </>
  )
}

export default Layout