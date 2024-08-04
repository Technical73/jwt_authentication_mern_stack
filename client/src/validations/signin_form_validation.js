import * as yup from "yup";

const signinSchema = yup.object().shape({
  email_id: yup
    .string()
    .email("Invalid Email ID")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters long")
    .required("Password is required"),
});

export default signinSchema;
