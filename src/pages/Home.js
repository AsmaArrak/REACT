import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/4.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Bienvenue Chez STARPRINT </h1>
      
        <Link to="/contact">
          <button> Contactez-nous </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;