import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { AdvanceSchema } from "../Schemas/Schema";
import CustomSelect from "./CustomSelect";
import CustomBox from "./CustomBox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  actions.resetForm();
};

function Portal() {
  return (
    <div className="Formik-Name">
      <Formik
        initialValues={{
          Username: "",
          School: "",
          Isaccepted: false,
        }}
        onSubmit={onSubmit}
        validationSchema={AdvanceSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="kullancı adı"
              name="Username"
              type="text"
              placeholder="Plese Enter Username"
            />
            <CustomSelect label="Education" name="School" />
            <CustomBox name="Isaccepted" type="checkbox" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>{" "}
            <Link to={"/"}>Go to Home Page</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Portal;
