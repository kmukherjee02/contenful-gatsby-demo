//import Image from 'next/image'
import React from 'react'

const contentfulLoader = ({ src, width, quality }) => {
  return `https:${src}?w=${width}&q=${quality || 75}&fm=webp`
}

const ContentfulImage = (props) => {
  return <img loader={contentfulLoader} {...props} alt={props.alt}/>
}

export default ContentfulImage
