import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPosts = ({data}) => {
    return(
        <Layout PageTitle={data.mdx.frontmatter.title}>
            <div>
                <p> {data.mdx.frontmatter.date} </p>
                <MDXRenderer>
                    {data.mdx.body}
                </MDXRenderer>
            </div>
        </Layout>
    )
}
export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default BlogPosts