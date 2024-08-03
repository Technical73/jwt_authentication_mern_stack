const SignUp_Form = () => {
  return (
    <>
      {/* form  starts */}
      <form className="global_form_styles">
        {/* header starts*/}
        <div className="global_form_header">
          <h2>Sign up</h2>
        </div>
        {/* header ends */}
        {/* inputs starts */}
        <div className="global_form_input_container">
          {/* username field*/}
          <div className="global_form_input">
            <input type="text" name="username" placeholder="Username" />
          </div>
          {/* email id field */}
          <div className="global_form_input">
            <input type="email" name="email_id" placeholder="E-mail" />
          </div>
          {/* password field */}
          <div className="global_form_input">
            <input type="password" name="password" placeholder="Password" />
          </div>
          {/* confirm password field */}
          <div className="global_form_input">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
          {/* signUp button starts */}
          <button type="submit" className="global_form_input_button">
            Sign up
          </button>
          {/* signUp button ends */}
        </div>
        {/* inputs ends */}

        {/* Navigate to sigin in starts */}
        <span className="forgot_password_button">
          Already have an account?{"  "}
          <a href="#" className="forgot_anchor_tag">
            {" "}
            Sign in
          </a>
        </span>

        {/* Navigate to signin in ends */}
      </form>
      {/*  form ends */}
    </>
  );
};

export default SignUp_Form;
