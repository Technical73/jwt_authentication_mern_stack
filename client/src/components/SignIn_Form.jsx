const SignIn_Form = () => {
  return (
    <>
      {/* form  starts */}
      <form className="global_form_styles_siginIn">
        {/* header starts*/}
        <div className="global_form_header">
          <h2>Sign in</h2>
        </div>
        {/* header ends */}
        {/* inputs starts */}
        <div className="global_form_input_container">
          {/* email id field */}
          <div className="global_form_input">
            <input type="email" name="email_id" placeholder="E-mail" />
          </div>
          {/* password field */}
          <div className="global_form_input">
            <input type="password" name="password" placeholder="Password" />
          </div>
          {/* forget password button starts */}
          <a href="#" className="forgot_password_button">
            Forgot your password?
          </a>
          {/* forget password button ends */}
          {/* signUp button starts */}
          <button type="submit" className="global_form_input_button">
            Sign in
          </button>
          {/* signUp button ends */}
        </div>
        {/* inputs ends */}
        {/* Navigate to siginUp starts */}
        <span className="forgot_password_button">
          Already have an account?{"  "}
          <a href="#" className="forgot_anchor_tag">
            {" "}
            Sign up
          </a>
        </span>

        {/* Navigate to signUp ends */}
      </form>
      {/*  form ends */}
    </>
  );
};

export default SignIn_Form;
