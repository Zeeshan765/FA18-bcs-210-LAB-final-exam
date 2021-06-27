import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import "./Login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory()

  const login = (e) => {
    
    axios({  method: "post",
      url: "http://localhost:4000/api/users/login",
      data: {  email: email,  password: password, },
    })
    
    history.push("/home")

  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="Enter Email here" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password"  placeholder="Enter Password Here"  onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => login()}>Logiin</button>
      </form>
    </div>
  );
}

export default Login;
