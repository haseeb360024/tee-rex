
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Whishlist from './Pages/Whishlist';
import Home from './Pages/Home';

function App() {
  return (
    <>
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Whishlist/>}/>
     </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
