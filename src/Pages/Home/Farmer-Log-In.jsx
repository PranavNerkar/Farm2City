import React from "react";
import image from "./../../images/Home/logo.png";
import { useReducer,useState } from "react";

const init = {
    email:"",
    pass:""
}

const reducer = (state,action) =>{
    switch(action.type) {
        case 'update':
            return {...state,[action.fld]:action.val} 
        case 'reset' :
            return init;
    }
}


function FarmerLogIn() {
    const[info, dispatch] = useReducer(reducer, init);
    const [flag,setFlag] = useState(false);


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="d-flex flex-column align-items-center p-4 border rounded bg-white shadow-sm">
        <div className="mb-4 text-center">
          <img
            src={image}
            alt="Farm2City"
            title="Farm2City"
            className="img-fluid mb-2"
            style={{ maxWidth: "100px" }}
          />
          <h2>Farm2City</h2>
        </div>
        <form className="w-100">
          <table className="w-100">
            <tbody>
              <tr>
                <td>
                  <label>Email</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    value={info.email}
                    onChange={(e)=>{
                        dispatch({
                            type:"update",
                            fld:"email",
                            val:e.target.value
                        })
                    }}

                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="pwd">Password</label>
                </td>
                <td>
                  <input
                    id="pwd"
                    type="password"
                    name="pwd"
                    className="form-control mb-2"
                    value=""
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="button"
                    name=""
                    value="Log In"
                    className="btn btn-outline-success me-4"
                  />
                </td>
                <td>
                  <input
                    type="button"
                    name=""
                    value="Reset"
                    className="btn btn-outline-danger me-4"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p className="text-center mt-2">Forgot Password</p>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="mt-2">
          <label htmlFor="">New User?</label>
          <input
            type="button"
            name=""
            value="Sign in"
            className="btn btn-primary ms-2"
          />
        </div>
      </div>
    </div>
  );
}

export default FarmerLogIn;
