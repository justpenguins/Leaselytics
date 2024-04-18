import React, { useState, useEffect } from 'react';
import './App.css';
import FiltersForm from './components/FiltersForm.js';
import Block from './components/Block.js';
import logoSvg from './LeaseLyticsLogoBlue.svg';
import { jwtDecode } from "jwt-decode";
import SignupForm from './components/SignupForm.js';

function App() {
  const [request, setRequest] = useState({});
  const [response, setResponse] = useState('');
  const [ user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    // show option to sign-in button
    document.getElementById("signInDiv").hidden = false;
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "1000336939480-fgfku4o35kcj9n7tadb47ujdi5q3t5c9.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();
  }, []);

  // if we have no user: show sign-in button
  // if we have a user: show log-out button

  const handleResponse = (req, newResponse) => {
    console.log("App req:")
    console.log(req)
    console.log(`App newResponse: ${newResponse}`)
    setRequest(req);
    setResponse(newResponse);
    console.log("response: " + response);
  };

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }
      { user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>
      }
      <div className="container" style={{ width: '100%' }}>
        {/* <div className="form">
          <img src={logoSvg} alt="Logo" style={{ width: '400px', height: 'auto' }} />
          <FiltersForm onResponse={handleResponse} />
        </div>
        <div className="block">
          {response != '' && <Block request={request} response={response} />}
          {response != '' && <Block response={response} />}
        </div> */}
        <SignupForm />
      </div>
    </div>
  );
}

export default App;
