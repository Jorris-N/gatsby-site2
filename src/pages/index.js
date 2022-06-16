import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return(
   <Layout PageTitle="Gatsby Framework">
    <div>
      <h3>welcome to my new gatsby site.</h3>
      <p>Sit down, relax and take your time to learn more about gatsbyv framework</p>
      <Link to="/about" className={"underline text-blue-500"}>Learn more About Us Here.</Link>
      <StaticImage
      alt="Pintrest"
      src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />

    </div>
    </Layout>
  )
}

export default IndexPage