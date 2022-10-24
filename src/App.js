import "./App.css";
import Welcome from "./components/pages/welcome/Welcome";
import Setup from "./components/pages/setup/Setup";
import UsePlan from "./components/pages/usePlan/UsePlan";
import Finish from "./components/pages/finish/Finish";
import Home from "./components/pages/home/Home";
import Error from "./components/pages/home/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/useplan" element={<UsePlan />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
