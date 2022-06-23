import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addValues } from "../Redux/actions/addAction";
import "../styles/styles.css";

const InputFields = ({ setPageHandle, forwardValue }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (email && fullName) {
      const formData = {
        email: email,
        fullname: fullName,
      };
      console.log(formData, forwardValue);
      dispatch(addValues(formData));
      setPageHandle(false);
    } else alert("Enter email and Full name");
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const fullNameChange = (e) => {
    setFullName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Enter FullName</label>
        <input onChange={fullNameChange} type="text" value={fullName} />
        <br />
        <br />
        <label>Enter Email</label>
        <input onChange={emailChange} type="text" value={email} />
        <br />
        <br />
        <input type="submit" />
      </form>
      <></>
    </div>
  );
};

export default InputFields;
