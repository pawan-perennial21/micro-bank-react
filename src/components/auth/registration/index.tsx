import { Formik, Form, Field, ErrorMessage } from "formik";
import { registrationValidationSchema } from "../../../constants/validations";
import { RegistrationState } from "../../../types";

const initialValues: RegistrationState = {
  fullName: "",
  dateOfIncorporation: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegistrationForm() {
  const onSubmit = (values: RegistrationState, { resetForm }: any) => {
    resetForm({ values: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={registrationValidationSchema}
    >
      {(formik) => {
        return (
          <div className="form-container">
            <p className="title">Create an Account</p>
            <Form className="form">
              <div>
                <label className="label" htmlFor="fullName">
                  FullName
                </label>
                <Field className="input" type="text" name="fullName" />
                <ErrorMessage name="fullName" component="span" />
              </div>
              <div>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <Field className="input" type="email" name="email" />
                <ErrorMessage name="email" component="span" />
              </div>
              <div>
                <label className="label" htmlFor="dateOfIncorporation">
                  Date Of Incorporation
                </label>
                <Field
                  className="input"
                  type="date"
                  name="dateOfIncorporation"
                />
                <ErrorMessage name="dateOfIncorporation" component="span" />
              </div>
              <div>
                <label className="label" htmlFor="password">
                  Password
                </label>
                <Field className="input" type="password" name="password" />
                <ErrorMessage name="password" component="span" />
              </div>
              <div>
                <label className="label" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <Field
                  className="input"
                  type="password"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" component="span" />
              </div>
              <button
                className="button"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Create an Account
              </button>
            </Form>
            <p>
              Already have an account? <span className="login-span">Login</span>
            </p>
          </div>
        );
      }}
    </Formik>
  );
}
