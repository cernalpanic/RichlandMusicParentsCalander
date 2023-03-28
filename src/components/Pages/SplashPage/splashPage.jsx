import React from "react";
import { useHistory } from "react-router-dom";
import "./SplashPage.css";
import ImageSlider from "../ImageSlider/ImageSlider";
// This is is the for the landing page, get started button will take you to the login page.
function SplashPage() {
  const history = useHistory();

  function getStartedButton() {
    history.push("/login");
  }
  return (
    <>
      <body className="splash">
        <div className="logo"></div>
        <h1 className="RMP">Richland Music Parents</h1>

        <p className="splashPageP">
          Join the Richland Music Parents' community fundraising revolution with
          our Music Parents Community Calendar app! Easily add household
          information, pay online, and track orders. Plus, contribute to the
          community effort by adding important dates. Support students and the
          community with ease!
        </p>
        <button onClick={getStartedButton}>Get Started</button>
      </body>
      <ImageSlider/>

      
    </>
  );
}
export default SplashPage;
