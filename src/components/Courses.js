import React from 'react'
import Layout from './Layout'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <Layout>
      <h1>Courses</h1>
      <ul>
        <li><Link to="fed">FED_Course</Link></li>
        <li><Link to="bed">BED_Course</Link></li>
        {/* <li>BED_Course</li> */}
      </ul>
      <Outlet />   {/* Where You Want to Show the Outlet Part */}
      <hr />
      
      <p>Courses are educational programs or classes designed to teach specific subjects or skills to students. They are offered by various educational institutions, such as schools, colleges, universities, online platforms, or specialized training centers.</p>
      <br />
      <p>Courses can cover a wide range of topics and disciplines, including academic subjects, professional skills, personal development, arts, sciences, technology, and more. They provide structured learning experiences and often have defined curriculum, objectives, and assessments.</p>
      {/* <Outlet /> */}
    </Layout>
  )
}

export default Courses