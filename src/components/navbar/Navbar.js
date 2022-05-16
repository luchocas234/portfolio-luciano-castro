import React from 'react'
import "./Navbar.css"
import { useTranslation } from 'react-i18next';
import { useState } from 'react';


export default function Navbar({isScrolling}) {

  const[t, i18n] = useTranslation("global");
  const[idiom,setIdiom]=useState(true);

  const handleChange= () =>{
    setIdiom(!idiom)
    if (idiom == true){
      i18n.changeLanguage("es")
    }
    else{
      i18n.changeLanguage("en")
    }
  }
  

const toTheTop = ()=>{
    window.scrollTo({top:0, left:0, behavior:"smooth"})
}


  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop}>L | C</div>
        <div className='language'>
          <p>English</p>
          <div class="slider-container">
            <label class="switch" for="checkbox">
              <input type="checkbox" id="checkbox"  onChange={()=> handleChange()} />
              <div class="slider round"></div>
            </label>
          </div>
          <p>Español</p>
        </div>

    </nav>
  )
}
