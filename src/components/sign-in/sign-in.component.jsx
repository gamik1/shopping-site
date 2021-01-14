import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

function SignIn() {
  const [details, setDetails] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  }

  function handleSubmit(event) {
    setDetails({ email: "", password: "" });
    event.preventDefault();
  }

  return (
    <div className="sign-in">
      <h1>I already have an account.</h1>
      <span>signin With your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="email"
          value={details.email}
        />
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="password"
          value={details.password}
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
}

export default SignIn;
