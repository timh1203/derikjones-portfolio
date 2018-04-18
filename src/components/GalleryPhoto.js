import React from 'react'
import '../assets/stylesheets/GalleryPhoto.css'

const GalleryPhoto = (props) => {
  return (
    <div className="col-lg-4 col-md-3 col-sm-12">
      <a href={props.details.link} target="_blank"><img src={props.details.images.standard_resolution.url} alt={props.details.caption.from.text} /></a>
      <p><span className="icons">🗨</span> {props.details.comments.count} | <span className="icons">🎔</span> {props.details.likes.count}</p>
      <p>{props.details.caption.text}</p>
    </div>
  )
}

export default GalleryPhoto