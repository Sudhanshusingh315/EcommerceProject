import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/Index";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
