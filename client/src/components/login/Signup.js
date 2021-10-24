import React, { useState } from "react";

export default function SignUp({ setAppState }) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleFirstNameChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setState({ firstname: event.target.value });
  };

  const handleLastNameChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setState({ lastname: event.target.value });
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const response = await fetch("/register", {
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
      console.log(`Registration failed! ${e.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleFirstNameChange}
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={handleLastNameChange}
          placeholder="Last name"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={handleEmailChange}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handlePasswordChange}
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
}
