import React, { useState } from "react";
import "../plan-info/plan-info.css";
import advance from "../images/icon-advanced.svg";
import arcade from "../images/icon-arcade.svg";
import pro from "../images/icon-pro.svg";
import "../plan-info/plan-info.css";
const PlanInfo = ({
  currentPage,
  setCurrentPage,
  saveInfo,
  setSaveInfo,
  planPrice,
  setPlanPrice,
  setIsComplete,
}) => {
  // const [saveInfo, setSaveInfo] = useState("");
  // const [planPrice, setPlanPrice] = useState();
  return (
    <div className="plan-container">
      <div className="plan-head">
        <h1 className="select-your-plan">Select you plan</h1>
        <p>have your option for monthly and yearly billing.</p>
      </div>
      <div className="plan-selection">
        <div
          className="plan-chart"
          onClick={() => {
            setSaveInfo("arcade");
            setPlanPrice(+9);
            console.log(planPrice);
          }}
        >
          {" "}
          <img src={arcade} alt="arcade" />
          <div>
            {" "}
            <h3> Arcade </h3>
            <span> $9/mo</span>
          </div>
        </div>
        <div
          className="plan-chart"
          onClick={() => {
            setSaveInfo("advance");
            setPlanPrice(+12);
          }}
        >
          {" "}
          <img src={advance} alt="advance" />
          <div>
            {" "}
            <h3> Advance </h3>
            <span> $12/mo</span>
          </div>
        </div>
        <div
          className="plan-chart"
          onClick={() => {
            setSaveInfo("pro");
            setPlanPrice(+15);
            console.log(saveInfo);
          }}
        >
          {" "}
          <img src={pro} alt="pro" />
          <div>
            {" "}
            <h3> Pro </h3>
            <span> $15/mo</span>
          </div>
        </div>
      </div>
      <div className="monthly/yearly-selection">
        <span className="slide-selection">monthly</span>{" "}
        <span className="slider"></span>
        <span className="slide-selection">yearly</span>
      </div>
      <div className="page-change">
        {" "}
        <button
          className="go-back"
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
        >
          {" "}
          go back
        </button>
        <div className="next-page-btn">
          {" "}
          <button
            className="next-page"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setIsComplete(true);
            }}
          >
            {" "}
            next page
          </button>
        </div>{" "}
      </div>
    </div>
  );
};
export default PlanInfo;
