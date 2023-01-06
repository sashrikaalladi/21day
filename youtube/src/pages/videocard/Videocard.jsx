import React from 'react'
// import "./Videocard.css"
import "./Videocard.scss"
const Videocard = ({ image, title, channel, views, timestamp, img }) => {
  return (
    <div className='videocard'>
      <img className='videocard__thumbnail' src={image} alt="" />
      <div className='video__text'>
        <p>{img}</p>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views}.{timestamp}
        </p>
      </div>
    </div>

  )
}

export default Videocard;
