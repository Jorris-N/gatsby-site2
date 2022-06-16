import *as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"



const BlogPage = ({data}) => {
    return(
        <Layout PageTitle="My Blog Posts">
            <div>
                <p className={"capitalize mt-6 text-lg text-sky-600 text-center font-bold mb-4"}>My blog posts will go Here</p>
              {
                  data.allMdx.nodes.map ((node) => (
                    <div className={"place-content-center"}>
                      <article  key={node.id}>
                        <div className={"mb-6"}>
                          <h2 className={"text-red-600 text-center font-semibold"}><Link to={node.slug}> {node.frontmatter.title} </Link></h2>
                          <p className={"text-center"}>Posted: {node.frontmatter.date}</p>
                        </div>
                      </article>
                    </div>
                  ))
              }
            </div>
        </Layout>
    )
}

export const query = graphql `
query {
  allMdx(sort: {order: ASC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date
        title
         hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
      }
      id
      slug
    }
  }
}
`

export default BlogPage