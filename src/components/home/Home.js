import React, { useEffect, useState } from "react";
import Style from "./Home.module.scss";
import me from "../../img/self.png";
import classNames from "classnames";
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import axios from "axios";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random?tags=technology")
      .then((response) => {
        setQuote(response.data);
      })
      .catch((error) => {
        console.log("error " + error);
      });
  }, []);

  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "column" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      marginBottom={"100px"}
      background={"red"}
      gap={"30px"}
    >
      <Box
        flexDirection={{ xs: "column", md: "row" }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={Style.trapezoid}>
          <img className={Style.box} src={me} alt="" />
        </div>
        <Box>
          <h1 className={Style.name}>
            Hi, I'm{" "}
            <span
              style={{
                background: info.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {info.firstName}
            </span>
            <span className={Style.hand}>🏴‍☠️</span>
          </h1>
          <h2>I'm Frontend Developer.</h2>
          <Box component={"ul"} p={"0.8rem"}>
            {info.miniBio.map((bio, index) => (
              <EmojiBullet
                key={index}
                emoji={bio.emoji}
                text={bio.text}
                link={bio.link}
              />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            {info.socials.map((social, index) => (
              <SocialIcon
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <div className={Style.qoutesMain}>"{quote.content}"</div>
    </Box>
  );
}
