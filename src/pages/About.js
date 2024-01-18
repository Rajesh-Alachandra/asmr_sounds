import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1rem",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome</Typography>
        <p>

          Welcome to [Your Gym Chalk Blocks Website]

          Step into a world of unparalleled performance with [Your Gym Chalk Blocks Website], where fitness meets innovation. Our gym chalk blocks redefine the standard, offering a premium grip solution for athletes of all disciplines. Crafted from the finest magnesium carbonate, our chalk blocks not only elevate your grip but also signify a commitment to excellence. Designed for weightlifters, gymnasts, and climbers alike, [Your Brand] Chalk Blocks empower you to push your limits, break barriers, and conquer every fitness goal with confidence.
        </p>
        <br />
        <p>
          Beyond the chalk, our commitment extends to fostering a community passionate about fitness. Dive into our blog for expert insights, connect with like-minded individuals on social media, and explore a curated selection of high-quality fitness products in our shop. At [Your Gym Chalk Blocks Website], we invite you to join us on a journey where every lift, every climb, and every workout is a step towards surpassing your personal best. Welcome to a world where the pursuit of greatness begins with the perfect grip.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
