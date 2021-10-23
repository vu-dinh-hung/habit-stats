import React, { useState } from "react";

export default function SignUp() {
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
    const values = this.state;

    try {
      const response = await fetch("/register", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status !== 200) {
        throw new Error(`Request failed: ${response.status}`);
      }
    } catch (e) {
      console.log(`Registration failed! ${e.message}`);
    }
  };

  return (
    <form onSubmit={this.handleSubmit()}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={this.handleFirstNameChange}
          placeholder="First name"
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          required
          onChange={this.handleLastNameChange}
          placeholder="Last name"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          required
          onChange={this.handleEmailChange}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          onChange={this.handlePasswordChange}
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
