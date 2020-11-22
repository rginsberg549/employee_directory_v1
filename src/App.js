import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid from "./components/Grid";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Grid} />
      </div>
    </Router>
  );
}

export default App;
