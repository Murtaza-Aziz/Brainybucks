import React, { useState } from "react";
import "./SubscribePage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "./BrainyLogo 1.png";

const SubscribePage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const redirectToPayment = () => {
    if (selectedOption === "monthly") {
      window.location.href = "https://buy.stripe.com/test_dR6bLN5tM3jT92McMN";
    } else if (selectedOption === "annual") {
      window.location.href = "https://buy.stripe.com/test_5kAaHJ5tM8EdbaU28a";
    }
  };

  return (
    <div className="container-subscribe">
      <div className="card">
        <div className="logo-subscribe">
          <Link to="/">
            <img className="logo-subscribe" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="Top-subscribe">
          <h1>Subscribe</h1>
        </div>

        {/* Subscription Form */}
        <div className="form-subscribe">
          <h5>You are subscibing to Brainybucks Marketplace</h5>

          <div className="form-option">
            <input
              type="radio"
              name="subscription"
              value="monthly"
              id="monthly"
              checked={selectedOption === "monthly"}
              onChange={handleOptionChange}
            />
            <label htmlFor="monthly">Monthly Subscription ($50.00)</label>
          </div>

          <div className="form-option">
            <input
              type="radio"
              name="subscription"
              value="annual"
              id="annual"
              checked={selectedOption === "annual"}
              onChange={handleOptionChange}
            />
            <label htmlFor="annual">Annual Subscription ($540.00)</label>
          </div>

          <p>You subscription will automatically renew at the end of the billing period.</p>

          <button className="button" onClick={redirectToPayment}>
            Subscribe
          </button>
        </div>
      </div>

      <Navbar />
      <Footer />
    </div>
  );
};

export default SubscribePage;
