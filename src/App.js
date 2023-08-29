import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/home";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/signup" element={<SignupPage/>} />

        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
