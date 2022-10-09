import React from "react";
import { Box } from "@mui/material";

function EmojiBullet(props) {
  const { emoji, text, link } = props;

  return (
    <>
      <Box
        component={"a"}
        fontSize={"1rem"}
        display={"block"}
        lineHeight={1.5}
        style={{ cursor: "default" }}
        target={"_blank"}
        href={link}
        download={"Hamza"}
      >
        <Box
          component={"span"}
          aria-label="cheese"
          role="img"
          mr={{ xs: "0.5rem", md: "1rem" }}
          fontSize={"1.5rem"}
        >
          {emoji}
        </Box>{" "}
        {text}
      </Box>
    </>
  );
}

export default EmojiBullet;
