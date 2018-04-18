import React from 'react'
import {instagram} from '../helpers/ig'
import '../assets/stylesheets/Gallery.css'
import GalleryPhoto from './GalleryPhoto'

class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      photos: {},
    }
  }

  addPhotos = (data) => {
    let photos = {...this.state.photos}
    photos = data
    this.setState({ photos })
  }

  componentDidMount() {
    instagram.get('users/self/media/recent')
      .then((res) => {
        let photos = res.data.slice(0, 3);
        this.setState({ photos })
      })
      .catch((err) => {
          console.log("error" + err);
      })
  }

  render() {
    let {photos} = this.state
    return (
      <div className="Gallery" id="Gallery">
        <h1>GALLERY</h1>
        <div className="row justify-content-around Gallery__images">
        { Object.keys(photos).map( key => <GalleryPhoto key={key} details={photos[key]} />) }
        </div>
      </div>
    )
  }
} 

export default Gallery
