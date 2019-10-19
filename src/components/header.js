import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundImage: 'linear-gradient(to right, rgb(0, 159, 255), rgb(236, 47, 75))',
      backgroundImage: `linear-gradient(to right, rgb(131, 96, 195), rgb(46, 191, 145))`,
      backgroundPosition: 'initial initial; background-repeat: initial initial',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
