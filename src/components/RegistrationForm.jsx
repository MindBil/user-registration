import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleLoginButton from "./GoogleLoginButton";
import FacebookLoginButton from "./FacebookLoginButton";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="registration-form">
      <div className="left-section">
        <img
          src="https://media.istockphoto.com/id/823730304/vector/log-in-page-on-smartphone-screen.jpg?s=612x612&w=0&k=20&c=eL5umxRX9akdPyU1EY8xiK9TiTnokqrqAspKbxqzDus="
          className="registration-image"
        />
      </div>
      <div className="right-section">
        <h2 className="custom-font">Get started</h2>
        <div className="login-options">
          <GoogleLoginButton />
          <FacebookLoginButton />
        </div>
        <h3 className="custom-font">Or</h3>{" "}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="form-group">
              <button type="submit">Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
