import React, { useState } from "react";
import "./main-page.css";
import PageFinish from "../finsihingPage/PageFinish";
import InfoPage from "../infoPage/info-page";
import PlanInfo from "../plan-info/plan-info";
import AddOns from "../add-ons/addons";
import ThankyouPage from "../thankyouPage/thankyouPage";
const MainWindow = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [planInfo, setPlanInfo] = useState();
  const [saveInfo, setSaveInfo] = useState("arcade");
  const [planPrice, setPlanPrice] = useState(9);
  const [isComplete, setIsComplete] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const pageFunction = () => {
    if (currentPage === 1) {
      return (
        <InfoPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setIsSubmit={setIsSubmit}
        />
      );
    }
    if (currentPage === 2) {
      return (
        <PlanInfo
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          planPrice={planPrice}
          setPlanPrice={setPlanPrice}
          saveInfo={saveInfo}
          setSaveInfo={setSaveInfo}
          setIsComplete={setIsComplete}
        />
      );
    }
    if (currentPage === 3) {
      return (
        <AddOns
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          planInfo={planInfo}
          setPlanInfo={setPlanInfo}
          setIsComplete={setIsComplete}
        />
      );
    }
    if (currentPage === 4 && isComplete == true && isSubmit == false) {
      return (
        <PageFinish
          planInfo={planInfo}
          saveInfo={saveInfo}
          planPrice={planPrice}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setIsConfirmed={setIsConfirmed}
        />
      );
    } else {
      setCurrentPage(3);
    }
  };
  return (
    <>
      <div className="contanier-main">
        <section className="button-functioning">
          <a
            className="page-toggle"
            onClick={() => {
              setCurrentPage(1);
            }}
          >
            {" "}
            <button className="page">1</button>{" "}
            <div className="anchor-wrapup">
              <span className="marking-steps">Step-1</span>
              <div className="page-toggle-text-info"> Your info</div>
            </div>
          </a>
          <a
            className="page-toggle"
            onClick={() => {
              setCurrentPage(2);
            }}
          >
            <button className="page">2</button>{" "}
            <div className="anchor-wrapup">
              <span className="marking-steps">Step-2</span>
              <div className="page-toggle-text-info">select plan</div>
            </div>
          </a>
          <a
            className="page-toggle"
            onClick={() => {
              setCurrentPage(3);
            }}
          >
            <button className="page">3</button>{" "}
            <div className="anchor-wrapup">
              <span className="marking-steps">Step-3</span>
              <div className="page-toggle-text-info"> add-ons</div>
            </div>
          </a>
          <a
            className="page-toggle"
            onClick={() => {
              setCurrentPage(4);
            }}
          >
            <button className="page">4</button>{" "}
            <div className="anchor-wrapup">
              <span className="marking-steps">Step-4</span>
              <div className="page-toggle-text-info">summary</div>
            </div>
          </a>
        </section>
        <section className="work-display">
          {isConfirmed ? <ThankyouPage /> : pageFunction()}
        </section>{" "}
      </div>
    </>
  );
};
export default MainWindow;
