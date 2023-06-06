import React from "react";
import "./Contact.css";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+256751488669"; // Replace with the desired phone number
    const message = "Hello! This is a pre-filled message."; // Replace with the desired pre-filled message

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl);
  };

  return (
    <div className="outer_Container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact_container">
        <form className="form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input
            type="email"
            placeholder="Your Email Address"
            className="input-field"
          />
          <textarea
            placeholder="Your Message"
            rows="10"
            className="textarea-field"
          ></textarea>
          <button className="button-primary fit-content">
            Send Me a Message
          </button>
        </form>

        <div className="info_container">
          <div className="info">
            <div className="icon mail">
              <GoMail name="mail" role="img" aria-label="mail" />
            </div>
            <a
              href="mailto:emmanuelkafeero3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black", cursor: "pointer" }}
            >
              <p className="text">emmanuelkafeero3@gmail.com</p>
            </a>
          </div>

          <div className="info">
            <div className="icon whatsapp">
              <BsWhatsapp
                name="logo-whatsapp"
                role="img"
                aria-label="logo whatsapp"
                onClick={handleWhatsAppClick}
                style={{ cursor: "pointer" }}
              />
            </div>
            <p className="text">+256-751488669</p>
          </div>

          <div className="info">
            <div className="icon github">
              <BsGithub name="github" role="img" aria-label="github" />
            </div>
            <p className="text">Github</p>
          </div>

          <div className="info">
            <div className="icon linkedIn">
              <a
                href="https://www.linkedin.com/in/emmanuel-kafeero/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", cursor: "pointer" }}
              >
                <BsLinkedin name="linkedIn" role="img" aria-label="linkedIn" />
              </a>
            </div>
            <p className="text">linkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
