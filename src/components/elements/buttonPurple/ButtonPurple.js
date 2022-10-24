import React from "react";
import "./ButtonPurple.css";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#512be2",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

function ButtonPurple({ name, redirectPage }) {
  let navigate = useNavigate();
  function handleNavigate() {
    redirectPage === undefined
      ? alert("Please enter valid information!")
      : navigate(`/${redirectPage}`);
  }
  return (
    <ThemeProvider theme={theme}>
      <Button
        className="clickme"
        color="neutral"
        variant="contained"
        onClick={handleNavigate}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
}

export default ButtonPurple;
