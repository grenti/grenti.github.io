import classNames from 'classnames'
import { Link } from 'gatsby'
import React from 'react'

import styles from './MenuItem.module.scss'

export interface IMenuItemProps {
  className?: string
  name?: string
  onClick?: (event: any) => void
  rel?: string
  target?: '_blank' | '_parent' | '_self' | '_top'
  text: string
  title?: string
  to: string
}

function MenuItem(props: IMenuItemProps) {
  const { className, onClick, text, to } = props
  return (
    <li className={classNames(className, styles.MenuItem)}>
      <Link to={to} activeClassName={styles.activeItem} onClick={onClick}>
        {text}
      </Link>
    </li>
  )
}

export default MenuItem
