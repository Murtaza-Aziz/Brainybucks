import React from "react";
import "./LearnMorePage.css";
import { Link } from "react-router-dom";
import coins from "./learn-more-coins.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import logo from "./BrainyLogo 1.png";

const LearnMorePage = () => {
  return (
    <div className="container-learn-more">
      <div className="logo-learn-more">
        <Link to="/">
          <img className="logo-learn-more" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="Top-logo-learn-more">
        <h2>Empowering Your Financial Journey</h2>
      </div>
      <div className="Top-text-learn-more">
        <p>
          At Brainybucks, we understand that financial well-being is an
          essential aspect of leading a fulfilling and secure life.{" "}
        </p>
        <p>
          We are dedicated to helping individuals like you navigate the
          complexities of personal finance and achieve your financial goals with
          confidence.{" "}
        </p>
      </div>
      <div className="Top-img-learn-more">
        <img src={coins} alt="Coins" />
      </div>
      <div className="main-text-heading-learn-more">
        <h2>What is Financial Management? </h2>
      </div>
      <div className="main-text-learn-more">
        <p>
          Financial planning encompasses various aspects of personal and
          business finance, including budgeting, savings, investments, risk
          management, retirement planning, tax planning, estate planning, and
          more. The primary objective of financial planning is to align
          financial resources with specific goals and aspirations.
        </p>
      </div>
      <div className="main-text-info-learn-more">
        <br />
        <p>Key elements of financial planning include:</p>
        <ol>
          <li>
            <p>
              <strong>Assessment of current financial situation:</strong> This
              involves evaluating income, expenses, debts, assets, and
              liabilities to gain a clear understanding of one's financial
              standing.{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>Goal setting:</strong> Identifying and prioritizing
              financial goals, such as saving for education, buying a house,
              starting a business, or retiring comfortably.{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>Developing a financial strategy:</strong> Creating a
              detailed plan that outlines the steps required to achieve the
              established goals. This includes determining the appropriate
              investment strategies, risk management approaches, and savings
              techniques.{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>Implementation:</strong> executing the financial plan by
              taking concrete actions, such as opening investment accounts,
              setting up savings plans, or adjusting spending habits.{" "}
            </p>
          </li>
          <li>
            <p>
              <strong>Monitoring and reassessment:</strong> Regularly reviewing
              and updating the financial plan to accommodate changing
              circumstances, market conditions, and evolving goals. This ensures
              that the plan remains relevant and effective over time.{" "}
            </p>
          </li>
        </ol>
      </div>
      <div className="rectangle-learn-more">
        <div className="rectangle-text-learn-more">
          <h3>How Investment scams work</h3>
          <p>
            Be suspicious of anyone offering you easy money. Scammers are
            skilled at convincing you that the investment is real, the returns
            are high and the risks are low. There's always a catch.
          </p>
        </div>
      </div>
      <div className="rectangle-learn-more-2">
        <div className="rectangle-text-learn-more-2">
          <h3>Quick ways to start a budget</h3>
          <p>
            Creating and sticking to a budget is essential for several reasons.
            Firstly, a budget provides a clear overview of your financial
            situation. It helps you understand how much money you have coming in
            and how much you are spending. This knowledge enables you to make
            informed decisions about your finances and identify areas where you
            can make adjustments or cut back on expenses.
          </p>
        </div>
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default LearnMorePage;
