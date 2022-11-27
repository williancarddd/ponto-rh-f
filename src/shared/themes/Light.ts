import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

const LightTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
      dark: blue[900],
      light: blue[500],
      contrastText: "#fff",
    },
    secondary: {
      main: cyan[500],
      dark: blue[400],
      light: blue[300],
      contrastText: "#fff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffff",
    },
  },
});

export default LightTheme;
