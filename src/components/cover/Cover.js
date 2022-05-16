import React from 'react'
import "./Cover.css"
import { useTranslation } from 'react-i18next';
import video1 from "../../media/coverVideo.mp4"

export default function Cover() {

  const[t, i18n] = useTranslation("global");
  return (
    <div className='cover-container'>
        <video className='video' src={video1} autoPlay loop muted/>
        <h1> Luciano Castro</h1>
        <p> {t("cover.desc")} </p>
    </div>
  )
}
