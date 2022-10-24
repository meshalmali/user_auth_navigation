import React from "react";
import "../../css/Main.css";
import ButtonPurple from "../../elements/buttonPurple/ButtonPurple";
import Header from "../../elements/header/Header";
import Banner from "../../elements/banner/Banner";
import Form from "../../elements/form/Form";

function Welcome() {
  return (
    <div className="page">
      <div className="page-container">
        <Header image="/images/step1.png" />
        <Banner
          heading="Welcome! First things first..."
          description="You can always change them later."
        />
        <Form
          input1="Full Name"
          placeholder1="Steve Jobs"
          input2="Display Name"
          placeholder2="Steve"
          flow="welcomeFlow"
          redirectPage="setup"
        />
      </div>
    </div>
  );
}

export default Welcome;
