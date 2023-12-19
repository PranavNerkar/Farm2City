import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import NavigationBar from './Pages/Home/NavBar';

function App() {
  return (
    <div>
      <NavigationBar />
      {/* <Router>
        <Routes>
          <Route path="/" exact component={NavigationBar} />
          <Route path="/Farmer-LogIn" component={<NavigationBar />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
