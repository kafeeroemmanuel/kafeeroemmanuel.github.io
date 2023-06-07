import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ImageCarousel.css";

function ImageCarousel() {
  const onClickThumb = (index, item) => {
    // Perform any actions when a thumbnail is clicked
    console.log("Thumbnail clicked:", index);
  };
  return (
    <Carousel
      className="carousel"
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      showArrows={true}
      showThumbs={true}
      interval={4000}
      onClickThumb={onClickThumb}
    >
      <div className="slider-item">
        <img src="/Images/signum.png" alt="project 1" />
        <p className="slider-item-text">Project one</p>
      </div>
      <div className="slider-item">
        <img src="/Images/ExpensesApp.png" alt="project 2" />
        <p className="slider-item-text">Project two</p>
      </div>
      <div className="slider-item">
        <img src="/Images/SK Foundation.png" alt="project 3" />
        <p className="slider-item-text">Project three</p>
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
