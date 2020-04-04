import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query albumTileQuery {
      file(relativePath: { eq: "covers/weezer-blue_album.jpeg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)

  return <Img fixed={data.file.childImageSharp.fixed} />
}