import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import LaunchDetail from "./Pages/LaunchDetails";
import Launches from "./Pages/Launches";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:flightNumber" element={<LaunchDetail />} />
      </Routes>
    </div>
  );
}

export default App;
