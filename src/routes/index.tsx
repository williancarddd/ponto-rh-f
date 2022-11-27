import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export default function AppRoutes() {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route
        path="/initial-page"
        element={
          <Button variant="contained" color="secondary" onClick={toggleTheme}>
            Teste
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
}
