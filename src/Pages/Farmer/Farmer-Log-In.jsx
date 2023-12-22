import React from "react";
import image from "./../../images/Home/logo.png";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  email: "",
  pass: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.val };
    case "reset":
      return init;
  }
};

function FarmerLogIn() {

  const navigate = useNavigate();

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("");
  const [flag, setFlag] = useState(false);

  const setMessage = () => {
    if (msg == 0) {
      return "Wrong Email";
    } else {
      return "Wrong Password";
    }
  };

  const submitData = (e) => {
    e.preventDefault();
    setFlag(true);
    const reqOption = {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: info.email,
        pass: info.pass,
      }),
    };

    fetch("http://localhost:9000/getFarmerInfo", reqOption)
      .then((resp) => resp.json())
      .then((data) => {
        const val = data[0].entry;
        if(val == 1 ){
          navigate("/Farmer-Home");
        }
        setMsg(val);
      });
  };

  return (
    // message is not going till login validations are correct

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
          <h2 style={{ color: "darkgreen" }}>Farmer Log In</h2>
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
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "email",
                        val: e.target.value,
                      });
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
                    value={info.pass}
                    onChange={(e) => {
                      dispatch({
                        type: "update",
                        fld: "pass",
                        val: e.target.value,
                      });
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{ display: flag ? "block" : "none", color: "red" }}>
                  <p>{setMessage()}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-outline-success me-4"
                    onClick={(e) => {
                      submitData(e);
                    }}
                  />
                </td>
                <td>
                  <input
                    type="reset"
                    value="Reset"
                    className="btn btn-outline-danger me-4"
                    onClick={(e) => {
                      setFlag(false);
                      dispatch({
                        type: "reset",
                      });
                    }}
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
