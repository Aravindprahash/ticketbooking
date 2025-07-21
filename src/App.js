import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Contactpage from './components/common/Contactpage';
import Navbar from './components/common/navbars';
import Detail from './page/detail/Detail';
import Products from './components/CustomCard';
import Cart from './page/Cart/Cart';
import { CartProvider } from './context/CartContext';
import Login from './page/login/login';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = () => {
    console.log("Search clicked for:", searchTerm);
  };

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  return (
    <CartProvider>
      {location.pathname !== '/login' && (
        <Navbar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={onSearch}
        />
      )}

      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={<Products />} />
        <Route path="/Contactpage" element={<Contactpage />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
