import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email_id: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export default SignUpSchema;
