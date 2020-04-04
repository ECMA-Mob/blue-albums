import { Link } from "gatsby"
import React from "react"

import headerStyles from "./header.module.css"

const Header = () => (
  <header>
    <div className={headerStyles.nav}>
        <Link 
          to="/"
          activeClassName="active"
        >
          Top 25
        </Link>
        {" | "}
        <Link 
          to="/contenders"
          activeClassName="active"
        >
          Contenders
        </Link>
        {" | "}
        <Link 
          to="/process"
          activeClassName="active"
        >
          Process
        </Link>
        {" | "}
        <Link 
          to="/album-details"
          activeClassName="active"
        >
          Details
        </Link>
    </div>
    <div>
      <h1>/Blo͞o ˈAlbəm/ - ALBUM DETAILS</h1>
      <h2><i>noun</i> - 1. An album that can be listened to in it's entirety, front to back, without skipping a single track.</h2>
    </div>
  </header>
)

export default Header
