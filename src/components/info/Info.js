import React from 'react'
import "./Info.css"
import { useTranslation } from 'react-i18next';

export default function Info() {
  const[t] = useTranslation("global");


  return (
    <div className='info-container'>
        <div className='info'>
            <h1>{t("info.text")}</h1>
        </div>
    </div>
  )
}
