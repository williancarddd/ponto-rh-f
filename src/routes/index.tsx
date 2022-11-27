import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/initial-page" element={<Button />} />

      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
}
