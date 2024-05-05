import React from 'react'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    try{
    e.preventDefault();

    console.log("url login rev :",`${process.env.REACT_APP_SERVER_URL}/user/login`)
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
          email: email,
          password: password
        }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      credentials: 'include'
    });

    const contentType = await res.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1){
      const user = await res.json();
      console.log(user);
      
      if(user.user.email==="admin@admin") navigate('/homeadmin');
      else navigate('/');
    }
    else{
      const text = await res.text();
      console.log(text);
    }
    }catch(err){
      console.log("catch err" ,err)
    }
  };

  return (
    <div className='container auth-div'>
    <div className='col-md-5 auth-box'>
    <h4 className='heading'> Login </h4>
    <form onSubmit={handleLogin}>
      <div className="mb-3 form-group">
        <input
          type="email"
          className="form-control"
          id="UserEmail"
          aria-describedby="emailHelp"
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div className="mb-3 form-group">
        <input
          type="password"
          className="form-control"
          id="UserPassword"
          placeholder="Password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
      </div>
      <button type="submit" className="mb-1 btn btn-primary btn-submit btn-auth" id="Login-btn">
        Login
      </button>
    </form>

    <div><p style={{"fontSize":"13px"}}> New User? <a href="/signup" id='Login-Signup' 
     className='login-signup'> SignUP now </a> </p></div>
    </div>
    </div>
  )
}

export default Login


