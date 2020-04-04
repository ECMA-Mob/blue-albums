import React from "react"
import AlbumCover from "../AlbumCover"
import { Link } from "gatsby"

import albumTileStyles from "./album-tile.module.css"

const AlbumTile = ( props ) => {

  return (
    <div className={albumTileStyles.albumDetails}>
      <a href="#/album-details"><AlbumCover /></a>
      <span class="caption">
        <h1>{ props.title }</h1>
        <h3>{ props.band }</h3>
      </span>
    </div>
  )
}

export default AlbumTile