import React, { useState } from "react";
import "../finsihingPage/PageFinish.css";

const PageFinish = ({
  planInfo,
  saveInfo,
  planPrice,
  setIsConfirmed,
  currentPage,
  setCurrentPage,
}) => {
  const hnadlePage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="finish-container">
      <div className="finishing-head">
        <h1> Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <div className="page-finish-main">
          <div className="pack-info-price">
            <div className="pack-planes"> {saveInfo}</div>
            <span> {planPrice}/mo</span>
          </div>
          <div className="custum-plan">
            {" "}
            Customizable profile <span> ${planInfo}</span>
          </div>
        </div>
        <div className="total-price">
          <span> Total (per month) </span> ${planInfo + planPrice}
        </div>
        <div className="proceed-buttons">
          {" "}
          <button className="go-back" onClick={hnadlePage}>
            {" "}
            Go Back
          </button>{" "}
          <button
            className="next-page"
            onClick={() => {
              setIsConfirmed(true);
            }}
          >
            {" "}
            Confirm
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
export default PageFinish;
