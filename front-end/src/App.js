import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Singuppage';
import "./App.css";

function App() {
  return (
    < >
    <Header/>
      <Routes>
          <Route
              path="/"
              element={<Homepage />}
          />
          <Route
              path="/login"
              element={<Loginpage />}
          />
           <Route
              path="/signup"
              element={<Signuppage />}
          />
      </Routes>
    <Footer/>
     
    </>
  );
}

export default App;
