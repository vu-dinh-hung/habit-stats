import React, { useState } from "react";

export default function User({ state, setAppState }) {
  return (
    <div>
      <h3>{state.user.firstname + " " + state.user.lastname}</h3>
      <h5 className="text-center">{state.user.email}</h5>
      <div className="col text-center">
        <button
          className="btn btn-primary btn-block"
          onClick={() => setAppState({ token: null, user: null })}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
