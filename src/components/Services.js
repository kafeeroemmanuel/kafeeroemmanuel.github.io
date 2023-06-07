import React, { useEffect } from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { MY_SERVICEDATA } from "../constants/Servicedata";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services" id="services">
      <div className="services_container">
        <h2>Services</h2>
        <div className="content_Container">
          {MY_SERVICEDATA.map((part) => (
            <Card
              key={part.id}
              icon={part.icon}
              title={part.title}
              description={part.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
