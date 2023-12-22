import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import FarmerLogIn from './Pages/Farmer/Farmer-Log-In';
import BuyerLogIn from './Pages/Buyer/Buyer-Log-In';
import FarmerHome from './Pages/Farmer/Farmer-Home';
import BuyerHome from './Pages/Buyer/Buyer-Home';
import UpdatePasswordFarmer from './Pages/Farmer/Update-Password';
import UpdatePasswordBuyer from './Pages/Buyer/Update-Password';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/farmer-log-in' element={<FarmerLogIn />}/>
          <Route path='/buyer-log-in' element={<BuyerLogIn />}/>
          <Route path='/Farmer-Home' element={<FarmerHome />}/>
          <Route path='/Buyer-Home' element={<BuyerHome />}/>
          <Route path='/farmer-log-in/update-password' element={<UpdatePasswordFarmer />}/>
          <Route path='/buyer-log-in/update-password' element={<UpdatePasswordBuyer />}/>
        </Routes>
    </div>
  );
}

export default App; 