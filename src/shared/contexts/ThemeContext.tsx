import React, { createContext, useState, useCallback, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";

import DarkTheme from "../themes/Dark";
import LightTheme from "../themes/Light";

interface ITheContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: React.ReactNode;
}
const ThemeContext = createContext({} as ITheContextData);

const useAppThemeContext = () => React.useContext(ThemeContext);

function AppThemeProvider({ children }: IThemeProviderProps) {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) => (oldThemeName === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => {
    if (themeName === "light") {
      return LightTheme;
    }
    return DarkTheme;
  }, [themeName]);

  const themeValue = useMemo(
    () => ({
      themeName,
      toggleTheme,
    }),
    [themeName, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, AppThemeProvider, useAppThemeContext };
