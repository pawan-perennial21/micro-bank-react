import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginValidationSchema } from "../../../constants/validations";
import { LoginState } from "../../../types";

const initialValues: LoginState = {
  email: "",
  password: "",
};
export default function Login() {
  const onSubmit = (values: LoginState) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
    >
      {(formik) => {
        return (
          <div className="form-container">
            <p className="title">Login</p>
            <p className="sub-title">Please login to your account</p>
            <Form className="form">
              <div>
                <label className="label" htmlFor="email">
                  Email or Phone
                </label>
                <Field className="input" type="email" name="email" />
                <ErrorMessage name="email" component="span" />
              </div>
              <div>
                <label className="label" htmlFor="password">
                  Password
                </label>
                <Field className="input" type="password" name="password" />
                <ErrorMessage name="password" component="span" />
              </div>
              <button
                className="button"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Login
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
