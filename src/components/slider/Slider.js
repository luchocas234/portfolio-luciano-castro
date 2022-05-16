import React from "react";
import Carousel from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

import { useTranslation } from 'react-i18next';

const Slider = () => {
  const[t] = useTranslation("global");

  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2 >{t("projects.title")}</h2>
      </div>

      <Carousel
        arrows
        slidesPerPage={3}
        infinite
       
        animationSpeed={200}
        centered
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            itemWidth: 250,
          },
        }}
      />
    </div>
  );
};

export default Slider;