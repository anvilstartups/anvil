import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";

import Navbar from "./navbar";
import Footer from "./footer";

import "../stylesheets/index.scss";
import "typeface-open-sans";
import "typeface-poppins";
// import "typeface-work-sans"

import favicon from "../assets/favicon.ico";

import styles from "./layout.module.scss";

const Layout = ({ children, location, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            url
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={
            pageTitle
              ? `${data.site.siteMetadata.title} - ${pageTitle}`
              : data.site.siteMetadata.title
          }
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            {
              name: "og:description",
              content: data.site.siteMetadata.description
            },
            {
              name: "og:site_name",
              content: data.site.title
            },
            {
              name: "keywords",
              content:
                "Purdue University, Startups, Entrepreneurship, Technology, Co-working, coworking"
            },
            {
              name: `og:url`,
              content: data.site.siteMetadata.url
            },
            {
              name: `og:type`,
              content: "website"
            }
          ]}
          link={[
            { rel: "shortcut icon", type: "image/png", href: `${favicon}` }
          ]}
        >
          <link rel="canonical" href={data.site.siteMetadata.url} />
          <html lang="en" />
        </Helmet>

        {location.pathname === withPrefix("/") ? (
          <div className={styles.squares}>
            <div className={styles.yellowSquare} />
            <div className={styles.greenSquare} />
            <div className={styles.blueSquare} />
          </div>
        ) : null}

        <Navbar location={location} />
        <div className={styles.container}>{children}</div>
        <Footer />
      </>
    )}
  />
);

export default Layout;
