import React from "react";
import "./Slider.css"

const slidesInfo = [
    {
        src:"https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg",
        alt: "Project1",
        desc: "App - Lista de Tareas",
        link: "www.google.com"
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/11/08/05/01/airplane-1807486_1280.jpg",
        alt: "Project3",
        desc: "App - Adivina el Avión",
        link: "www.youtube.com"
    },
    {
        src:"https://i.ibb.co/hV9tZ0Z/2.png",
        alt: "Pilotfy",
        desc:"Content Creator - Pilotfy",
        link: "www.youtube.com"
    },
    {
        src:"https://i.ibb.co/kGmt7d4/Captura-de-Pantalla-2022-05-16-a-la-s-01-41-03.png",
        alt: "Pilotfy",
        desc:"Content Creator - Alpha Pergamino",
        link: "www.youtube.com"
    }
]

const slides =slidesInfo.map( slide=> (
    <div className="slide-container">
        <a href={slide.link}><img src={slide.src} alt={slide.alt}/></a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides