import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { container } from "./layout.module.css"
import { heading, navLinks, navLinkItems, navLinkText, siteTitle } from "./layout.module.css"

const Layout = ({PageTitle, children}) => {
    const data = useStaticQuery(graphql `
        query {
            site{
               siteMetadata{
                    title
                }
            }
        }
    `)
    return(
        <div className={container}>
            <title>{PageTitle} | {data.site.siteMetadata.title}</title>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItems}> <Link to="/" className={navLinkText}>Home</Link> </li>
                    <li className={navLinkItems}> <Link to="/about" className={navLinkText}>About Us</Link> </li>
                    <li className={navLinkItems}> <Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{PageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;