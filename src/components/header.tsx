import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

import Menu from '../components/Navigation/Menu'

import styles from './Header.module.scss'

const mainMenuLinks = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'History',
    to: '/history',
  },
  {
    text: 'Blog',
    to: '/blog',
  },
]

interface IHeaderProps {
  siteTitle: string
}

const Header: FunctionComponent<IHeaderProps> = ({ siteTitle }) => (
  <header className={styles.Header}>
    <h1 className={styles.Heading}>
      <Link className={styles.Link} to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className={styles.NavMenu}>
      <Menu links={mainMenuLinks} />
    </nav>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
