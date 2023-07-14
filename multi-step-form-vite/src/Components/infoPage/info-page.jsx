import React, { useState } from "react";
import "../infoPage/info-page.css";
const InfoPage = ({ currentPage, setCurrentPage, setIsSubmit }) => {
  let maincon = false;
  const [isNameValid, setValidname] = useState(false);
  const [email, setTextdata] = useState("");
  const [name, setNameData] = useState("");

  const [isValid, setIsValid] = useState(true);
  const handleData = (e) => setTextdata(e.target.value);
  console.log(email);
  const pageRender = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    if (isValidEmail) {
      setIsSubmit(true);
    }
  };
  const nameFunction = (e) => {
    e.preventDefault();
    setNameData(e.target.value);
    if (name >= 0) {
      setValidname(true);
    } else {
      setValidname(false);
    }
  };
  return (
    <>
      <div className="info-page-container">
        <div className="info-page-head">
          <h1 className="info-head">Personal info</h1>
          <p className="info-page-text">
            Please provide your name, email address and phone number
          </p>
        </div>
        <form className="info-page-input" onSubmit={pageRender}>
          <div className="input-name">
            <span className="input-head">Name</span>

            <input
              type="text"
              placeholder=" e.g. Stephen king"
              onChange={nameFunction}
            />
          </div>
          <div className="input-name">
            <span className="input-head">Email Address</span>
            {!isValid && <span>Valid email required</span>}
            <input
              type="text"
              placeholder=" e.g. StephenKing@lorem.com"
              onChange={handleData}
            />
          </div>
          <div className="input-name">
            <span className="input-head">Phone Number</span>
            <input type="text" placeholder=" e.g. +1 234 567 890" />
          </div>
          <button
            className="info-page-submit"
            disabled={isNameValid}
            onClick={(e) => {
              setCurrentPage(currentPage + 1);
            }}
          >
            {" "}
            Next Step
          </button>
        </form>
      </div>
    </>
  );
};
export default InfoPage;
