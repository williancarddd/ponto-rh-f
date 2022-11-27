import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import "./shared/styles/App.css";

function App() {
  return (
    <div>
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppThemeProvider>
    </div>
  );
}

export default App;
