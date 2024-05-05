import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AddProduct from './pages/AddProduct';
import RestockInventory  from './pages/RestockInventory';
import ShipOrders from './pages/ShipOrders';
import Contact from './pages/Contact';
import Login from './pages/Auth/Login';
import Profile from './pages/Profile';
import ProductUpdate from './pages/ProductUpdate';
import Signup from './pages/Auth/Signup';
import Logout from './pages/Auth/Logout';
import HomeAdmin from './pages/HomeAdmin';

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/> }/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/logout' element={<Logout/> }/>
      <Route path='/profile' element={<Profile/> }/>
      <Route path='/' element={<Homepage/> }/>
      <Route path='/addProduct' element={<AddProduct/> }/>
      <Route path='/restock' element={<RestockInventory/> }/>
      <Route path='/productUpdate' element={<ProductUpdate/> }/>
      <Route path='/shipOrder' element={<ShipOrders/> }/>
      <Route path='/contact' element={<Contact/> }/>
      <Route path='/homeadmin' element={<HomeAdmin/>} />
    </Routes>
    </>
  );
}

export default App;
