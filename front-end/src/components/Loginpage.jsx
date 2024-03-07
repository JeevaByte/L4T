import React from 'react'
import banner from '../img/banner-img.png'
import loginimg from '../img/login-img.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from "../services/Axios";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Loginpage = () => {

  let Navigate = useNavigate();

  const [user, setUser] = useState({
      email: "",
      password: ""
    });

  const [errorPwd, setErrorPwd] = useState("");

  const [notRegistered, setNotRegistered] = useState(false);

  const [typeState, setTypeState] = useState("password");

  const onInputChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value});
  }

  // If the password matches, goes to the next page (homepage for now), else error msg is displayed
  const onSubmit = async (e) => {
        e.preventDefault();
        setErrorPwd("");
        setNotRegistered(false);
        try{
          const response = await api.get("/login/"+user.email);
          if(response.data.password === user.password)
          {
            Navigate("/");
          }
          else
            setErrorPwd("Invalid Credentials")
          }
        catch{
          setNotRegistered(true);
        }
  }

  return (
    <>
    <section className='inner-banner'>
      <div class="container">
        <p> <a href="/">Home</a>&gt; Login</p>
        <h2>Login</h2>
      </div>
    </section>
    <section className='login-container'>
      <div className="container">
           <div className="row">
            <div className="col-md-10 m-auto">
              <div className="card">
              <div className="row align-items-center">
                <div className="col-md-6">
                <div className='left-login-content'>
                   <h4>Grow With learn4tomorrows</h4>
                   <div className='img-content'>
                      <img className='banner-img' src={loginimg} alt="banner-img" />
                         <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur.</h6>
                   </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className='right-login-content'>
                   <h4>Login</h4>
                   <div className="form">
                      <form onSubmit={(e) => onSubmit(e)}>
                          <div className="form-controls">
                            <input type="text" name="email" placeholder='Enter Email Address' onChange={(e) => onInputChange(e)}/>
                            {notRegistered && (
                              <p className="error"> Email ID doesn't exist </p>
                            )}
                          </div>
                          <div className="form-controls">
                            <input type={typeState} name="password" placeholder='Enter Password' onChange={(e) => onInputChange(e)}/>
                            {errorPwd && (
                              <p className="error"> {errorPwd} </p>
                            )}
                              <div className="form-check col-1">
                                <input className="form-check-input" type="checkbox" id="invalidCheck" onClick={() =>
                                  typeState === "password"
                                    ? setTypeState("text")
                                    : setTypeState("password")
                                } />
                                <label className="form-check-label" for="invalidCheck">
                                  Show Password
                                </label>   
                                </div>

                          </div>
                          <div className='d-flex justify-content-end form-controls'>
                             <button className='custom-btn login-btn' type='submit'>Submit</button>
                          </div>
                          <div className='signup-links'>
                               <span>Don't have an account? <Link to='/signup'>Sign Up</Link></span>
                          </div>
                      </form>
                   </div>
                </div>
              </div>
                </div>
              </div>
              
            </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Loginpage