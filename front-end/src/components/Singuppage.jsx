import React, { useState } from "react";
import loginimg from "../img/login-img.png";
import { useNavigate } from "react-router-dom";
import api from "../services/Axios";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Loginpage = () => {
  let Navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [typeState, setTypeState] = useState("password");

  const [errorEmail, setErrorEmail] = useState("");

  const [errorPwd, setErrorPwd] = useState("");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPwd("");
    // If the password matches, it goes to the login page. If not, error msg is displayed
    if (user.password === user.confirm_password) {
      // If the email exists, error msg is displayed
      try {
        console.log(user);
        const response = await api.post("/register", user);
        Navigate("/login");
      } catch {
        setErrorEmail("Email ID already exists");
      }
    } else {
      setErrorPwd("Enter the same password");
    }
  };

  return (
    <>
      <section className="inner-banner">
        <div class="container">
          <p>
            {" "}
            <a href="/">Home</a>&gt; Sign Up
          </p>
          <h2>Sign Up</h2>
        </div>
      </section>
      <section className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <div className="card">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="left-login-content">
                      <h4>Grow With learn4tomorrows</h4>
                      <div className="img-content">
                        <img
                          className="banner-img"
                          src={loginimg}
                          alt="banner-img"
                        />
                        <h6>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Pariatur.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-login-content">
                      <h4>Sign Up</h4>
                      <div className="form">
                        <form onSubmit={(e) => onSubmit(e)}>
                          <div className="form-controls">
                            <input
                              type="text"
                              placeholder="Enter Name"
                              name="name"
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-controls">
                            <input
                              type="text"
                              placeholder="Enter Email Address"
                              name="email"
                              onChange={(e) => onInputChange(e)}
                            />
                            {errorEmail && (
                              <p className="error"> {errorEmail} </p>
                            )}
                          </div>
                          <div className="form-controls">
                            <input
                              type={typeState}
                              placeholder="Enter Password"
                              name="password"
                              onChange={(e) => onInputChange(e)}
                            />
                          </div>
                          <div className="form-controls">
                            <input
                              type={typeState}
                              placeholder="Enter Confirm Password"
                              name="confirm_password"
                              onChange={(e) => onInputChange(e)}
                            />
                            {errorPwd && <p className="error"> {errorPwd} </p>}
                          </div>
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
                          <div className="d-flex justify-content-end form-controls">
                            <button className="custom-btn login-btn">
                              Submit
                            </button>
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
  );
};

export default Loginpage;
