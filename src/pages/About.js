import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import back1 from "../assets/1.jpg";
import back2 from "../assets/2.jpg";
import back3 from "../assets/3.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="slideshow">
        <Carousel showThumbs={false} showIndicators={true} infiniteLoop autoPlay>
          <div>
            <img src={back3} alt="Slide 1" />
          </div>
          <div>
            <img src={back2} alt="Slide 2" />
          </div>
          <div>
            <img src={back1} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
      <div className="aboutBottom">
        <h1> À PROPOS DE NOUS</h1>
        <h3>Nous sommes StarPrint,</h3>
        <p>Une entreprise spécialisée en sérigraphie et broderie sur tout type de produit textile depuis 2005</p>
        <p>Nous sommes passionnés par notre métier et fiers de fournir un service de qualité supérieure. Nous sommes équipés d'une technologie de pointe</p>
        <p>Nos professionnels expérimentés sont attentifs à chaque détail pour fournir des produits répondant à vos spécifications et à vos délais.</p>
      </div>
    </div>
  );
}

export default About;
