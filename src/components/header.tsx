import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

import styles from './Header.module.scss'

interface IHeaderProps {
  siteTitle: string
}

const Header: FunctionComponent<IHeaderProps> = ({ siteTitle }) => (
  <header className={styles.Header}>
    <div className={styles.Container}>
      <h1 className={styles.Heading}>
        <Link to="/" className={styles.Link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
