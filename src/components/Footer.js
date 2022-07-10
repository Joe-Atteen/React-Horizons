import React from "react";

function Footer(props) {
  return (
    <div className="container-fluid footer">
      <div className="row empty"></div>
      <div className="row">
        <div className="col-md-4 foot">
          <h3>VISIT US IN KENYA</h3>
          <h4>Nairobi, Kenya</h4>
          <p>
            Belgravia Centre, 14 Riverside drive, <br />
            4th floor, Off Riverside Drive
            <br /> Hannover Centre, 14 Riverside Drive,
            <br />
            6th floor, Off Riverside Drive
          </p>
        </div>
        <div className="col-md-4 foot">
          <h3>VISIT US IN GHANA</h3>
          <h4>Accra, {props.text}</h4>
          <p>One Airport Square, Airport City 8th Floor</p>
        </div>
        <div className="col-md-4 foot">
          <h3>VISIT US IN NIGERIA</h3>
          <h4>Lagos, Nigeria</h4>
          <p>Sterling Bank Building</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
