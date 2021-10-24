import React, { useState } from "react";

export default function Login({ setAppState }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setState({
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setState({
      password: event.target.value,
    });
  };

  const handleRememberChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify(state),
      });
      //DEV_CODE
      setAppState({
        token: 123,
        user: {
          firstname: "Elias",
          lastname: "Neuman-Donihue",
          email: "me@eliasnd.com",
          password: "password",
        },
      });
      /* if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`);
      }
      setAppState(response.json()); */
    } catch (e) {
      console.log(`Login failed! ${e.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={handleEmailChange}
          placeholder="Your email here"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={handlePasswordChange}
          placeholder="Your password here"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={handleRememberChange}
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
}
