import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/images/logo-2.jpg";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack alignItems="center" pt="24px">
        <img src={logo} alt="logo" width="100px" height="100px" />
        <Typography variant="h4" pb="40px">
          Gods Gym
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
