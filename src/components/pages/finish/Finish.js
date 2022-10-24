import React from "react";
import "../../css/Main.css";
import ButtonPurple from "../../elements/buttonPurple/ButtonPurple";
import Header from "../../elements/header/Header";
import Banner from "../../elements/banner/Banner";
import { useDataLayerValue } from "../../context/DataLayer";

function Finish() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="page">
      <div className="page-container">
        <Header image="/images/step4.png" />
        <div className="tickmark">
          <img src="/images/done.png" />
        </div>
        <Banner
          heading={`Congratulations, ${user}!`}
          description="You have completed onboarding, you can start using the Eden!"
        />

        <div className="button-purple">
          <ButtonPurple name="Launch Eden" redirectPage="home" />
        </div>
      </div>
    </div>
  );
}

export default Finish;
