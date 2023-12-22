// import React from 'react' ;
// import { useReducer, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function UpdatePassword() {
//     return (
//         <div>
//             Helo
//         </div>
//     )
// }

// export default UpdatePassword ;

import React from 'react';
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdatePassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., password change logic)
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">Password Change Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label">Old Password:</label>
            <input type="password" className="form-control" id="oldPassword" name="oldPassword" required />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password:</label>
            <input type="password" className="form-control" id="newPassword" name="newPassword" required />
          </div>
          <button type="submit" className="btn btn-primary">Change Password</button>
        </form>
      </div>
    </div>
  );
}

export default UpdatePassword;