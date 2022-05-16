import React from 'react'
import "./About.css"
import ph from '../../media/phprofile.jpeg'
import { useTranslation } from 'react-i18next';


export default function About() {
  const[t] = useTranslation("global");

  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>{t("about.title")}</h3>
            <p>{t("about.desc")}</p>
        </div>
        <div className='about-img'>
            <img src={ph}/>
        </div>


    </div>
  )
}
