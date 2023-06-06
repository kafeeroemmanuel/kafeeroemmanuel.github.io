import React, { useEffect } from "react";
import { BsBriefcase, BsSun, BsCodeSquare } from "react-icons/bs";
import { FaMedapps, FaRegAddressCard } from "react-icons/fa";
import { TbBuilding } from "react-icons/tb";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

const Services = () => {
  const icons = [
    <BsBriefcase />,
    <BsSun />,
    <TbBuilding />,
    <BsCodeSquare />,
    <FaMedapps />,
    <FaRegAddressCard />,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services" id="services">
      <div className="services_container">
        <h2>Services</h2>
        <div className="content_Container">
          {icons.map((icon, index) => (
            <Card key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
