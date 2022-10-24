import React, { useState, useEffect } from "react";
import "./Form.css";
import ButtonPurple from "../../elements/buttonPurple/ButtonPurple";
import { useDataLayerValue } from "../../context/DataLayer";

function Form({
  input1,
  placeholder1,
  input2,
  placeholder2,
  inputURL,
  placeholderURL,
  flow,
  redirectPage,
}) {
  const [{ user }, dispatch] = useDataLayerValue();
  const [userErr1, setUserErr1] = useState(false);
  const [userErr2, setUserErr2] = useState(false);
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");

  console.log("i am input 2, ", input2);

  var letters = /^[A-Za-z\s]*$/;

  useEffect(() => {
    if (flow === "welcomeFlow") {
      dispatch({
        type: "SET_USER",
        user: userInput1,
      });
    }
  }, [userInput1]);

  function userHandler1(e) {
    e.target.value.length > 2 && e.target.value.match(letters)
      ? setUserErr1(false)
      : setUserErr1(true);

    setUserInput1(e.target.value);
  }

  function userHandler2(e) {
    e.target.value.length > 2 && e.target.value.match(letters)
      ? setUserErr2(false)
      : setUserErr2(true);

    setUserInput2(e.target.value);
  }

  return (
    <div className="container">
      <div className="form">
        <div className="input">
          <div className="input-heading">
            <h5>{input1}</h5>
            {userErr1 ? <h5 className="invalid-input">Invalid input</h5> : ""}
          </div>
          <input
            type="text"
            placeholder={placeholder1}
            onChange={userHandler1}
          ></input>
        </div>
        {input2 === undefined ? (
          <div className="input">
            <div className="input-heading">
              <h5>{inputURL}</h5>
            </div>
            <input type="url" placeholder={placeholderURL}></input>
          </div>
        ) : (
          ""
        )}
        {inputURL === undefined ? (
          <div className="input">
            <div className="input-heading">
              <h5>{input2}</h5>
              {userErr2 ? <h5 className="invalid-input">Invalid input</h5> : ""}
            </div>
            <input
              type="text"
              placeholder={placeholder2}
              onChange={userHandler2}
            ></input>
          </div>
        ) : (
          ""
        )}
      </div>

      {flow === undefined ? (
        <div className="button-redirect">
          {userInput1 === "" || userErr1 === true ? (
            <ButtonPurple name="Create Workspace"></ButtonPurple>
          ) : (
            <ButtonPurple
              name="Create Workspace"
              redirectPage={redirectPage}
            ></ButtonPurple>
          )}
        </div>
      ) : (
        <div className="button-redirect">
          {userInput1 === "" ||
          userInput2 === "" ||
          userErr1 === true ||
          userErr2 === true ? (
            <ButtonPurple name="Create Workspace"></ButtonPurple>
          ) : (
            <ButtonPurple
              name="Create Workspace"
              redirectPage={redirectPage}
            ></ButtonPurple>
          )}
        </div>
      )}
    </div>
  );
}

export default Form;
