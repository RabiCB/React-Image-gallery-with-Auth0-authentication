import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Login.css"
const LoginButton = () => {
  const {loginWithRedirect} = useAuth0();

  return (
    <div style={{backgroundColor:'whitesmoke'}}>
     <div className="login-page">
      <h4 style={{marginBottom:'2rem'}}>SIGN-IN with AUTH0</h4>
        <div className="login-div">
        <button className="btn" onClick={() => loginWithRedirect()}>Sign In</button>
        </div>
    </div>
    </div>
   
  )
};

export default LoginButton;