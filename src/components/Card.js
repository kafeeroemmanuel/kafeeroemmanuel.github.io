import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";

const Card = ({ icon }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="card" data-aos="fade-up">
      <div className="service_ico">
        <span className="ico-circle">{icon}</span>
      </div>

      <div className="card_content">
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio omnis
          ut, facilis consequatur obcaecati architecto ad. Deserunt ipsa in
          natus error commodi inventore mollitia tempora tenetur.
        </p>
      </div>
    </div>
  );
};

export default Card;
