import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";

const Card = ({ icon, title, description }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="card" data-aos="fade-up">
      <div className="service_ico">
        <span className="ico-circle">{icon}</span>
      </div>

      <div className="card_content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
