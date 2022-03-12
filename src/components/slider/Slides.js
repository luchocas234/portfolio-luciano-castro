import React from "react";
import "./Slider.css"

const slidesInfo = [
    {
        src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Project1",
        desc: "Project1",
        link: "www.google.com"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Project2",
        desc: "Project2",
        link: "https://www.youtube.com/watch?v=lbKs9Yklz7o&t=2300s&ab_channel=Re-OnMedia"
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Project3",
        desc: "Project3",
        link: "www.youtube.com"
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Project3",
        desc: "Project3",
        link: "www.youtube.com"
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt: "Project3",
        desc: "Project3",
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