import React from 'react'
import "./Cover.css"
import video1 from "../../media/videoPor.mp4"

export default function Cover() {
  return (
    <div className='cover-container'>
        <video className='video' src={video1} autoPlay loop muted/>
        <h1> Luciano Castro</h1>
        <p> Developer | Entrepeneur | Social Media Manager</p>
    </div>
  )
}
