import React from "react";
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio() {
  return (
    <Box>
      <Grid container display={"flex"} justifyContent={"space-around"}>
        {info.portfolio.map((project, index) => (
          <Grid item xs={10} md={5.6} key={index}>
            <PortfolioBlock
              image={project.image}
              live={project.live}
              source={project.source}
              title={project.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
