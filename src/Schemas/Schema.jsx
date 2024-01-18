import * as yup from "yup";
const Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const BasicSchema = yup.object().shape({
  Email: yup
    .string()
    .email("Enter a valid Email")
    .required("Email is required"),
  Age: yup
    .number()
    .positive("Please enter a Positive number")
    .integer()
    .required("Age is required")
    .min(18, "You have to be at least 18 years Old"),
  Password: yup
    .string()
    .min(5, "Please enter at least 5 character")
    .max(60, "Max 60")
    .matches(Password, {
      message: "Please enter at least 1 lower case, Upper case and a number",
    })
    .required("Password is required"),
  RePasword: yup
    .string()
    .oneOf([yup.ref("Password")], "Password are not Matching")
    .required("Password is required"),
});

export const AdvanceSchema = yup.object().shape({
  Username: yup
    .string()
    .required("UserName is required")
    .matches(Password, {
      message: "Please enter at least 1 lower case, Upper case and a numbere",
    })
    .min("3", "Plese Enter At least 3 charachters"),
  School: yup
    .string()
    .oneOf(
      ["Bogazİçi", "Odtü", "İtü", "İkü", "Gsü"],
      "Please enter Your University"
    )
    .required("School is required"),
  Isaccepted: yup.boolean().oneOf([true], "Plese Accept terms"),
});
