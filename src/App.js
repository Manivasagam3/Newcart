
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "./Components/Footer/Footer";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids"
import Mens from "./Pages/Mens";

function App() {
  return (
    <div>
    <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/shop" element={<Shop/>}/> 
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/Womens" element={<Womens/>}/>\
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
};

export default App;

