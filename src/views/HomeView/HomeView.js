import React from "react";
import "./HomeView.css";
import dog from "../global/images/dog2.jpg";
import Container from "../components/Container/Container";
import OmOss from "../components/omoss/OmOss";
const HomeView = () => {
  return (
    <div>
      <img src={dog} className="mainPic" />
      <Container section="one" box1="one" box2="two" box3="three" />
      <Container
        sectionStyle="blue"
        section="two"
        box4="four"
        box5="five"
        box6="six"
      />
      <OmOss />
    </div>
  );
};

export default HomeView;
