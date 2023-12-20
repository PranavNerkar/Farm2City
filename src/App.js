import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import FarmerLogIn from './Pages/Home/Farmer-Log-In';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/farmer-log-in' element={<FarmerLogIn />}/>
        </Routes>
    </div>
  );
}

export default App;
