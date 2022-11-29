import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import useDrawerAtom from "../shared/hooks/useDrawerAtom";

export default function AppRoutes() {
  const { toggleDrawer } = useDrawerAtom();
  return (
    <Routes>
      <Route
        path="/initial-page"
        element={
          <Button variant="contained" color="secondary" onClick={toggleDrawer}>
            Toggle bar
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/initial-page" />} />
    </Routes>
  );
}
