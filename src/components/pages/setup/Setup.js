import React from "react";
import "../../css/Main.css";
import ButtonPurple from "../../elements/buttonPurple/ButtonPurple";
import Header from "../../elements/header/Header";
import Banner from "../../elements/banner/Banner";
import Form from "../../elements/form/Form";

function Setup() {
  return (
    <div className="page">
      <div className="page-container">
        <Header image="/images/step2.png" />
        <Banner
          heading="Let's set up a home for all your work"
          description="You can always create another workspace later."
        />
        <Form
          input1="Workspace Name"
          placeholder1="Eden"
          inputURL="Workspace URL (optional) "
          placeholderURL="www.eden.com/"
          redirectPage="useplan"
        />
      </div>
    </div>
  );
}

export default Setup;
