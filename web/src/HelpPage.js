import React, { useState } from "react";
import "./HelpPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "./BrainyLogo 1.png";

const HelpPage = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  return (
    <div className="container-help">
      <div className="logo-help">
        <Link to="/">
          <img className="logo-help" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="Top-title-help">
        <h1>Frequently Asked Question (FAQ)</h1>
      </div>
      <div className="dropdown-container">
        <div className="dropdown">
          <div
            className={`dropdown-heading-1 ${dropdown1Open ? "open" : ""}`}
            onClick={toggleDropdown1}
          >
            What is a financial marketplace?
            <span className="dropdown-symbol">{dropdown1Open ? "-" : "+"}</span>
          </div>
          <div className={`dropdown-content-1 ${dropdown1Open ? "open" : ""}`}>
            <p>
              A financial marketplace is an online platform where various
              financial products and services are offered, allowing users to
              buy, sell, trade, or invest in assets such as stocks, bonds,
              cryptocurrencies, commodities, and more.
            </p>
          </div>
        </div>
        <br />
        <div className="dropdown">
          <div
            className={`dropdown-heading-2 ${dropdown2Open ? "open" : ""}`}
            onClick={toggleDropdown2}
          >
            Can I invest directly through this financial marketplace?
            <span className="dropdown-symbol">{dropdown2Open ? "-" : "+"}</span>
          </div>
          <div className={`dropdown-content-2 ${dropdown2Open ? "open" : ""}`}>
            <p>
              No, the financial marketplace itself does not facilitate direct
              investments. Instead, it provides information and directs users to
              external websites or platforms where they can execute their
              investment transactions. These external websites typically offer
              trading or investment functionalities, and users will need to
              create accounts and follow their respective procedures to invest.
            </p>
          </div>
        </div>
        <br />
        <div className="dropdown">
          <div
            className={`dropdown-heading-3 ${dropdown3Open ? "open" : ""}`}
            onClick={toggleDropdown3}
          >
            How can I get started using this financial marketplace?
            <span className="dropdown-symbol">{dropdown3Open ? "-" : "+"}</span>
          </div>
          <div className={`dropdown-content-3 ${dropdown3Open ? "open" : ""}`}>
            <p>
              To get started, simply visit the financial marketplace's website
              and explore the available investment information and resources.
              Familiarize yourself with the recommended external websites for
              investing, and follow the provided links to access those platforms
              directly. It's important to create accounts on the external
              websites and adhere to their specific procedures for investing.
            </p>
          </div>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default HelpPage;
