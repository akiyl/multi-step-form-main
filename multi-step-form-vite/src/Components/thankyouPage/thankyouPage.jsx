import React from "react";
import "../thankyouPage/thankyouPage.css";
import check from "../images/icon-thank-you.svg";
const ThankyouPage = () => {
  return (
    <div className="thankyou-container">
      <div className="image-container">
        <img src={check} />
      </div>
      <h1 className="thankyou-head"> Thank you!</h1>
      <p className="thankyou-info">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};
export default ThankyouPage;
