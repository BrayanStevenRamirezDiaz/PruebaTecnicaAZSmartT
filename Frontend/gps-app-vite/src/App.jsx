import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeviceList from "./components/DeviceList";
import DeviceDetail from "./components/DeviceDetail";
import { DeviceProvider } from "./context/DeviceContext";

function App() {
  return (
    <DeviceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<DeviceList />} />
          <Route path="/device/:id" element={<DeviceDetail />} />
        </Routes>
      </Router>
    </DeviceProvider>
  );
}

export default App;