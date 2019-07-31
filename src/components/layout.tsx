/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, StaticQuery } from 'gatsby'
import React, { Fragment, FunctionComponent, ReactNode } from 'react'

import Header from './Header'

import styles from './Layout.module.scss'

import './global.css'

interface IRenderProp {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  children: ReactNode
}

function RenderLayout({ data, children }: IRenderProp) {
  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.Container}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  )
}

interface ILayoutProps {
  children: ReactNode
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <RenderLayout data={data} children={children} />}
  />
)

export default Layout
