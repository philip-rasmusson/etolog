import React from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedinIn,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
const instagram = <FontAwesomeIcon icon={faInstagramSquare} />;
const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

const SocialMedia = () => {
  return (
    <div>
      <p className="icons">
        <div className="iconDiv">{facebook}</div>
        <div className="iconDiv">{instagram}</div>
        <div className="iconDiv">{linkedin}</div>
        <div className="iconDiv">{envelope}</div>
      </p>
    </div>
  );
};

export default SocialMedia;
