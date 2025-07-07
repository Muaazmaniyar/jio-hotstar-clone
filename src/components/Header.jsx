import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/header.css';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email); 
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header className="main-header">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        {userEmail && (
          <span className="user-email">👤 {userEmail}</span>
        )}
      </nav>
    </header>
  );
};

export default Header;
