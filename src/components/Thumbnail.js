import React, { Component } from "react";

export default class Thumbnail extends Component {
  render() {
    return (
      <div className="container tnail">
        <div className="row">
          <h2>{this.props.title}</h2>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img
                src="site-img/off-space1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>VERTICAL OFFICES</h4>
                <p className="card-text th-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content'.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="site-img/off-space2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>CUSTOMIZED OFFICES</h4>
                <p className="card-text th-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content'.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="site-img/off-space3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>SERVICED OFFICES</h4>
                <p className="card-text th-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content'.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img
                src="site-img/off-space5.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h4>MEETING ROOMS</h4>
                <p className="card-text th-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
