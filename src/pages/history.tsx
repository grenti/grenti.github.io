import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

const SecondPage = () => (
  <Layout>
    <SEO title="History" />
    <h1>History</h1>
    <p>
      I started out working in the back-end of software development, starting
      with Microsoft Access at my first job and progressing to SQL Server and
      .NET to Ruby on Rails and Postgresql and finally venturing into Node and
      MySQL. In my current professional setting I work in PHP and React.
    </p>
    <p>
      I currently enjoy building web applications in React, Node and MySQL.{' '}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
