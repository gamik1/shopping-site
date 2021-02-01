import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

function SignIn() {
  const [details, setDetails] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = details;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setDetails({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
