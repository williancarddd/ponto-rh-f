import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import SideMenu from "./shared/components/side-menu/side-menu";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import "./shared/styles/App.css";

function App() {
  return (
    <div>
      <AppThemeProvider>
        <BrowserRouter>
          <SideMenu>
            <AppRoutes />
          </SideMenu>
        </BrowserRouter>
      </AppThemeProvider>
    </div>
  );
}

export default App;
