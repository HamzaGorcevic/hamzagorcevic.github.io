import React from "react";
import Style from "./Home.module.scss";

function SocialIcon(props) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={`${icon} ${Style.icon}`} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
