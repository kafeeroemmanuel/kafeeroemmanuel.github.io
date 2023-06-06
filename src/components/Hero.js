import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="hero" id="hero">
        <div className="content">
          <div className="my_intro" data-aos="fade-right">
            <h1>Kafeero Emmanuel</h1>
            <div>
              <p>I'm</p>
              <Typical
                className="typed"
                loop={Infinity}
                steps={[
                  "Developer 😊",
                  1000,
                  "Freelancer 💻",
                  1000,
                  "Designer ✍🏾",
                  1000,
                ]}
              />
            </div>
            <p>
              Passionately dedicated to transforming the world through
              technology.
            </p>

            <div className="btn_container">
              <a
                href="/EmmanuelKafeero C.V.pdf"
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
              >
                <button>Download my resume</button>
              </a>
              <Link to="contact" duration={500} smooth={true}>
                <button>Hire Me</button>
              </Link>
            </div>
          </div>

          <div className="my_image">
            <img src="/Images/ema.jpg" alt="Profile" data-aos="fade-left" />
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="wavesContainer">
        {/* <img src="/Images/wavesNegative.svg" alt="blue background" /> */}
      </div>
    </>
  );
};

export default Hero;
