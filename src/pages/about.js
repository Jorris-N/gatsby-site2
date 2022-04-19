import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
    return(
        <Layout PageTitle="About Us">
        <div>
            <h3>Get to now More about gatsby</h3>
            <p>Well hello there? welcome back and get ready to learn more about us/me. </p>
            <Link to="/">Back Home</Link>
            <StaticImage
            alt="Jorris"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />

        </div>
        </Layout>
    )
}

export default AboutPage