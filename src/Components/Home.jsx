import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { useFormik } from "formik";
import { BasicSchema } from "../Schemas/Schema";

const onSubmit = async (values, actions) => {
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.reset.form();
};

function Home() {
  const { values, errors, handleChange, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        Email: "",
        Age: "",
        Password: "",
        RePasword: "",
      },
      validationSchema: BasicSchema,
      onSubmit,
    });

  return (
    <div className="Main">
      <form>
        <label>E-mail</label>
        <input
          type="email"
          value={values.Email}
          placeholder="Please Enter Your E-mail address"
          onChange={handleChange}
          id="Email"
          className={errors.Email ? "ınputClass" : ""}
        />
        {errors.Email && <p className="Errors">{errors.Email}</p>}
        <label htmlFor=""> Age</label>
        <input
          type="number"
          value={values.Age}
          placeholder="Please Enter Your Age"
          onChange={handleChange}
          id="Age"
          className={errors.Age ? "ınputClass" : ""}
        />
        {errors.Age && <p className="Errors">{errors.Age}</p>}
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={values.Password}
          placeholder="Please Enter Your Password"
          onChange={handleChange}
          id="Password"
          className={errors.Password ? "ınputClass" : ""}
        />
        {errors.Password && <p className="Errors">{errors.Password}</p>}
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          value={values.RePasword}
          placeholder="Please Reenter Your Password"
          onChange={handleChange}
          name="RePasword"
          className={errors.RePasword ? "ınputClass" : ""}
        />
        {errors.RePasword && <p className="Errors">{errors.RePasword}</p>}
        <button disabled={isSubmitting} type="submit" onSubmit={handleSubmit}>
          Submit
        </button>{" "}
        <Link to={"/Portal"}>Go to Portal</Link>
      </form>
    </div>
  );
}

export default Home;
