import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signinSchema from "../validations/signin_form_validation";
const SignIn_Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
    mode: "onChange",
  });
  let onSignIn = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      {/* form  starts */}
      <form
        className="global_form_styles_siginIn"
        onSubmit={handleSubmit(onSignIn)}
      >
        {/* header starts*/}
        <div className="global_form_header">
          <h2>Sign in</h2>
        </div>
        {/* header ends */}
        {/* inputs starts */}
        <div className="global_form_input_container">
          {/* email id field */}
          <div className="global_form_input">
            <input
              type="email"
              {...register("email_id")}
              placeholder="E-mail"
            />
            {errors.email_id ? (
              <span className="validation_errors_style">
                {errors.email_id.message}
              </span>
            ) : (
              <span className="validation_default_errors">hello</span>
            )}
          </div>
          {/* password field */}
          <div className="global_form_input">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password ? (
              <span className="validation_errors_style">
                {errors.password.message}
              </span>
            ) : (
              <span className="validation_default_errors">hello</span>
            )}
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
          Don't you havve an account?{"  "}
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
