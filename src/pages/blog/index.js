import *as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"


const BlogPage = ({data}) => {
    return(
        <Layout PageTitle="My Blog Posts">
            <div>
                <p>My blog posts will go Here</p>
              {
                  data.allMdx.nodes.map ((node) => (
                      <article key={node.id}>
                          <h2><Link to={`/blog/${node.slug}`}> {node.frontmatter.title} </Link></h2>
                          <p>Posted: {node.frontmatter.date}</p>
                      </article>
                  ))
              }
            </div>
        </Layout>
    )
}

export const query = graphql `
query {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date
        title
      }
      id
      body
    }
  }
}
`

export default BlogPage