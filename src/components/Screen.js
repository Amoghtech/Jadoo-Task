import React from "react";
import demo from "../assets/svgs/demo.svg";
import head from "../assets/svgs/head.svg";
import para from "../assets/svgs/para.svg";
import play from "../assets/svgs/play.svg";
import h1 from "../assets/svgs/h1.svg";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Screen.css";
const Screen = () => {
  return (
    <div className="firstscreen">
      <div className="cco">
        <div className="h1">
          {/* <img src={h1} alt="" /> */}
          <p className="pp">Best Destinations around the world</p>
          {/* <img style={{ margin: "27px 0px" }} src={head} alt="" /> */}
          <h2 className={"title"}>
            Travel,
            <ins style={{ textDecorationColor: "#DF6951" }}>enjoy </ins>and live
            a new and full life
          </h2>
          {/* <h1>Travel, enjoy and live a new and full life</h1> */}
          {/* <img src={para} alt="" /> */}
          <p className="p1">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>
        <div className="btns">
          <button className="fom">Find out more</button>

          <a className="socialicon">
            <FontAwesomeIcon icon={faCaretRight} size="lg" />
          </a>
          <span className="text5">Play Demo</span>
        </div>
        {/* <div className="buttons">
          <span>Play</span>
        </div> */}
      </div>

      <img className="demo" src={demo} alt="" />
    </div>
  );
};

export default Screen;
