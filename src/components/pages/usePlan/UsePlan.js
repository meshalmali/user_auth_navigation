import React, { useState } from "react";
import "../../css/Main.css";
import "./UsePlan.css";
import ButtonPurple from "../../elements/buttonPurple/ButtonPurple";
import Header from "../../elements/header/Header";
import Banner from "../../elements/banner/Banner";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";

function UsePlan() {
  const [classPlanLeft, setClassPlanLeft] = useState("plan");
  const [classPlanRight, setClassPlanRight] = useState("plan");
  const [classIconRight, setClassIconRight] = useState("plain-icon");
  const [classIconLeft, setClassIconLeft] = useState("plain-icon");

  const handleLeftOver = () => {
    setClassPlanLeft("purplePlan");
    setClassIconLeft("purple-icon");
    setClassPlanRight("plan");
    setClassIconRight("plain-icon");
  };

  const handleRightOver = () => {
    setClassPlanRight("purplePlan");
    setClassIconRight("purple-icon");
    setClassPlanLeft("plan");
    setClassIconLeft("plain-icon");
  };

  return (
    <div className="page">
      <div className="page-container">
        <Header image="/images/step3.png" />
        <Banner
          heading="How are you planning to use Eden?"
          description="We'll streamline your setup experience accordingly."
        />
        <div className="plans">
          <div className={classPlanLeft} onClick={handleLeftOver}>
            <div className={classIconLeft}>
              <PersonIcon />
            </div>
            <div className="plan-type">
              <h4>For myslef</h4>
            </div>
            <div className="plan-benefits">
              <span>Write better. Think more clearly. Stay organised.</span>
            </div>
          </div>
          <div className={classPlanRight} onClick={handleRightOver}>
            <div className={classIconRight}>
              <GroupsIcon />
            </div>
            <div className="plan-type">
              <h4>With my team</h4>
            </div>
            <div className="plan-benefits">
              <span>Wikis, docs, tasks & projects, all in one place.</span>
            </div>
          </div>
        </div>
        <div className="button-purple">
          <ButtonPurple name="Create Workspace" redirectPage="finish" />
        </div>
      </div>
    </div>
  );
}

export default UsePlan;
