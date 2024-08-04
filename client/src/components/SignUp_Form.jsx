import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SignUpSchema from "../validations/signup_form_validation";
const SignUp_Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema), mode: "onChange" });
  let onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      {/* form  starts */}
      <form className="global_form_styles" onSubmit={handleSubmit(onSubmit)}>
        {/* header starts*/}
        <div className="global_form_header">
          <h2>Sign up</h2>
        </div>
        {/* header ends */}
        {/* inputs starts */}
        <div className="global_form_input_container">
          {/* username field*/}
          <div className="global_form_input">
            <input
              type="text"
              {...register("username")}
              placeholder="Username"
            />
            {errors.username ? (
              <span className="validation_errors_style">
                {errors.username.message}
              </span>
            ) : (
              <span className="validation_default_errors">hello</span>
            )}
          </div>
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
          {/* confirm password field */}
          <div className="global_form_input">
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirm Password"
            />

            {errors.confirmPassword ? (
              <span className="validation_errors_style">
                {errors.confirmPassword.message}
              </span>
            ) : (
              <span className="validation_default_errors">hello</span>
            )}
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
