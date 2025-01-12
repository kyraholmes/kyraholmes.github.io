// import './App.css'
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Portfolio from "./Portfolio";

function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
            <Route path="/" element={<Navigate to="Portfolio" />}/>
            <Route path="/Portfolio/*" element={<Portfolio />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App
