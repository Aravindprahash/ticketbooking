import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const CLIENT_ID = '15932861244-c4jnmdqbruclic1u5i4na5khoqjo6v3s.apps.googleusercontent.com';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  const hardcodedUser = {
    userId: 'Aravi@1719',
    password: '123456'
  };

const handleManualLogin = () => {
  if (userId === hardcodedUser.userId && password === hardcodedUser.password) {
    alert('Login Successful (Manual)');
    localStorage.setItem('isLoggedIn', 'true');  // ✅ Add this line
    navigate('/');
  } else {
    alert('Invalid user ID or password');
  }
};


 const handleGoogleLoginResponse = useCallback((response) => {
  const token = response.credential;
  const userData = decodeJwt(token);
  console.log("Google user:", userData);
  alert(`Login Successful (Google): ${userData.name}`);
  localStorage.setItem('isLoggedIn', 'true');
  navigate('/');
}, [navigate]);


  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  };

useEffect(() => {
  window.google?.accounts.id.initialize({
    client_id: CLIENT_ID,
    callback: handleGoogleLoginResponse
  });

  window.google?.accounts.id.renderButton(
    document.getElementById('google-login-button'),
    { theme: 'outline', size: 'large' }
  );
}, [handleGoogleLoginResponse]);


  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4 ">Login</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary w-100 mb-3" onClick={handleManualLogin}>
        Login
      </button>

      <div id="google-login-button" className="d-flex justify-content-center" />
    </div>
  );
};

export default Login;