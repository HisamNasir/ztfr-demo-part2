"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "../schemas";
import { error } from "console";
const onSubmit = () => {
  // console.log(value);
  // console.log(action);
  
};

const BasicForm = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        name: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="flex flex-col gap-4"
    >
      <div>
        <Input
          color={errors.email && touched.email ? "danger" : "default"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
          type="email"
          label="Email"
        />
        {errors.email && touched.email && (
          <p className="p-2 mx-2 bg-red-900 bg-opacity-30 text-center rounded-b-xl ">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <Input
          color={errors.age && touched.age ? "danger" : "default"}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className=""
          id="age"
          type="number"
          label="Age"
        />
        {errors.age && touched.age && (
          <p className="p-2 mx-2 bg-red-900 bg-opacity-30 text-center rounded-b-xl ">
            {errors.age}
          </p>
        )}
      </div>
      <div>
        <Input
          color={errors.name && touched.name ? "danger" : "default"}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
          type="text"
          label="Name"
        />
        {errors.name && touched.name && (
          <p className="p-2 mx-2 bg-red-900 bg-opacity-30 text-center rounded-b-xl ">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <Input
          color={errors.password && touched.password ? "danger" : "default"}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          type="password"
          label="Password"
        />
        {errors.password && touched.password && (
          <p className="p-2 mx-2 bg-red-900 bg-opacity-30 text-center rounded-b-xl ">
            {errors.password}
          </p>
        )}
      </div>
      <div>
        <Input
          color={
            errors.confirmpassword && touched.confirmpassword
              ? "danger"
              : "default"
          }
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmpassword"
          type="password"
          label="Confirm Password"
        />
        {errors.confirmpassword && touched.confirmpassword && (
          <p className="p-2 mx-2 bg-red-900 bg-opacity-30 text-center rounded-b-xl ">
            {errors.confirmpassword}
          </p>
        )}
      </div>
      <Button className=" w-32" size="lg" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default BasicForm;
