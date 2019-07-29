import React from 'react'

import MenuItem, { IMenuItemProps } from './MenuItem'

import styles from './Menu.module.scss'

interface IMenuProps {
  links: IMenuItemProps[]
}

export default function Menu(props: IMenuProps) {
  const { links } = props
  return (
    <ul className={styles.Menu}>
      {links.map((link: IMenuItemProps, i: number) => (
        <MenuItem key={`${link.to}-${i}`} {...link} />
      ))}
    </ul>
  )
}
