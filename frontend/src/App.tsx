import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Home />
      </Router>
    </>
  );
}
