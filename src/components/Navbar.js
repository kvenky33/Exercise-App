import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      {/* <Stack direction="row" fontSize="24px" justifyContent="space-around">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "20px", height: "20px" }}
          />{" "}
          <h4
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            {" "}
            Shape IT
          </h4>
        </Link>
      </Stack> */}
      <Stack direction="row" gap="5px">
        <img src={Logo} alt="logo" style={{ width: "25px", height: "25px" }} />
        <h4
          style={{
            textDecoration: "none",
            color: "#3A1212",
            fontSize: "24px",
            borderBottom: "3px solid #000",
          }}
        >
          Shape IT
        </h4>
      </Stack>
      <Stack direction="row" gap="30px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Excercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
