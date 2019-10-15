import React from 'react';
import GoogleLogin from 'react-google-login'; // Librery necessary, install by: yarn add react-google-login
import './App.css';

const responseGoogle = (response) => {
  console.log(response);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleLogin
          clientId="285925142864-dnrsdvm6cf9g8j85gsqatue2dtqmvabn.apps.googleusercontent.com" // google client ID register in: https://developers.google.com/identity/sign-in/web/sign-in
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </header>
    </div>
  );
}

export default App;
