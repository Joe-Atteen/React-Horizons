import React from "react";

function Carousel() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner car">
              <div className="carousel-item active">
                <img
                  src="site-img/carousel4.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="site-img/carousel2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="site-img/carousel4.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleFade"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleFade"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
