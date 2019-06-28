import { Link } from 'gatsby'
import React, { FunctionComponent } from 'react'

import Image from '../components/Image'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>
      I’m Ghamoti Anye Angwafo III. I’m a software engineer with over 15 years
      of professional experience in both web and desktop application
      development. I’ve worked in both backend and front-end roles and I love
      engineering on either client or server in web apps. While some opine that
      working on both client and server make you incapable of mastery, I enjoy
      learning and taking the time to focus on specific sides of engineering
      from time to time.
    </p>
    <p>
      At this current time, I’m currently focused in Front-end engineering,
      specifically working in React and learning more about accessibility on the
      web in both mobile and desktop. While I started out on the backend, I’ve
      come to appreciate UX Design and front-end engineering in its totality.
      For the past couple of years I’ve focused on exploring more in writing
      semantic and accessible HTML and modern and appropriate CSS as a front-end
      engineer.
    </p>
    <p>
      Other than engineering, I love music, video games and NBA basketball. My
      Marvin Gaye singing is on point and when I’m in shape, I’m a mean Michael
      Jackson impersonator. My wife and mourn the dearth of co-play XBox games -
      we love it (if Gears of War or Borderlands is your jam; we heart you). Oh
      yeah Michael Jordan is the greatest, of course, but I stan LeBron James.
    </p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/history/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
