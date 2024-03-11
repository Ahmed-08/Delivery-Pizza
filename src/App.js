import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Auth from './components/auth/Auth';
import Registration from './components/registration/Registration';
import React from 'react';


function App() {


  const [isSignIn, setSignIn] = React.useState(false);

  return (
    <div className="App" style={{
      width: '1400px',
      margin: '0 auto',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '18px'
    }}>
      <Header signIn = {isSignIn}/>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route exact path='/Auth' element={<Auth />} />
        <Route exact path='/Registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
