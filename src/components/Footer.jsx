import React from "react";
import "../css/Footer.css";

function Footer() {
  const handleClick = function () {
    window.open("https://priyanshuportfolio009.netlify.app/", "_blank", "noopener");
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          Thodi Baat Chit with <i className="f__text f__heart__symbol">&#10084;</i>{" "}
          {" "}
          <span className="f__text dev__name nowrap" onClick={handleClick}>
            Priyanshu Srivastava
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
