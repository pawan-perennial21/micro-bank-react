/* eslint-disable import/no-named-as-default-member */
import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string().test(
    "valid-email-or-phone",
    "Invalid email or phone number",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (value: any) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const phoneRegex =
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/im;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      if (emailRegex.test(value) || phoneRegex.test(value)) {
        return true;
      }

      return false;
    }
  ),
  password: Yup.string().required("required"),
});

const registrationValidationSchema = Yup.object({
  fullName: Yup.string().required("required"),
  dateOfIncorporation: Yup.string().required("required"),
  email: Yup.string().email("invalid email").required("required"),
  password: Yup.string().required("required"),
  confirmPassword: Yup.string().required("required"),
});

export { loginValidationSchema, registrationValidationSchema };
