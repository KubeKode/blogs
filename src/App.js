import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import EditorPage from "./Pages/Editor";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        Hello This is a Blog application by Kubekode
        <Routes>
           <Route exact path="/" Component={HomePage} />
           <Route path="/new-article" Component={EditorPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
