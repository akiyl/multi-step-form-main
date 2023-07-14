import React, { useState } from "react";
// import { planInfo, setPlanInfo } from "../main-page/main-page";
import "./addons.css";
const AddOns = ({
  currentPage,
  setCurrentPage,
  planInfo,
  setPlanInfo,
  setIsComplete,
}) => {
  // const [planInfo, setPlanInfo] = useState();
  return (
    <div className="addon-container">
      <div className="addon-head">
        {" "}
        <h1>pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
      </div>
      <div className="addons-main-content">
        {" "}
        <label
          className="online-status"
          onClick={() => {
            setPlanInfo(+1);
          }}
        >
          <div className="check-box">
            {" "}
            <input type="checkbox" />{" "}
          </div>
          <div className="add-info">
            <span className="add-main-info"> Online Service</span>
            <span className="add-text">access to multiplayer games</span>
          </div>
        </label>{" "}
        <label
          className="online-status"
          onClick={() => {
            setPlanInfo(+2);
            console.log(planInfo);
          }}
        >
          <div className="check-box">
            {" "}
            <input type="checkbox" />{" "}
          </div>
          <div className="add-info">
            <span className="add-main-info">larger Storage</span>
            <span className="add-text">Extro 1TB of cloud storage</span>
          </div>
        </label>{" "}
        <label
          className="online-status"
          onClick={() => {
            setPlanInfo(+2);
            console.log(planInfo);
          }}
        >
          <div className="check-box">
            <input type="checkbox" />{" "}
          </div>
          <div className="add-info">
            <span className="add-main-info"> Customizable Profile </span>
            <span className="add-text">Custom theme on your profile</span>
          </div>
        </label>
        <div className="add-on-page-handler">
          {" "}
          <button
            className="go-back"
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            {" "}
            Go Back
          </button>{" "}
          <button
            className="next-page"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              setIsComplete(true);
            }}
          >
            Next Page
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
export default AddOns;
