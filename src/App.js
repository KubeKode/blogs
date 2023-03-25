import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewArticlePage from "./Pages/NewArticle";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        Hello This is a Blog application by Kubekode
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/new-article" Component={NewArticlePage} />
          <Route path="/login" Component={LoginPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
