import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import ListContext from "../ListContext";
import "../../src/App.css";
const AddDetail = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { setName } = useContext(ListContext);

  const onSubmit = (data) => {
    console.log(data);
    setName((prev) => [...prev, data]);
    // setEmail((prev) => [...prev, data]);
    // setCategory((prev) => [...prev, data]);
    navigate("/job_list");
  };
  return (
    <div className="container">
      <div className="main_add">
        <h2 className="add_head">Enter Your Details Here</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Your Name : </label>

            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <span className="field_error"> This Field are required</span>
          )}
          <br />
          <br />
          <div>
            <label>Your Email : </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="field_error">This field is required</span>
          )}
          <br />
          <br />
          <div>
            <label>Your Job Title : </label>
            <select {...register("category", { required: true })}>
              <option value="">Select Category</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="fullstack">Fullstack</option>
              <option value="devops">DevOps</option>
            </select>
          </div>
          {errors.category && (
            <p className="field_error">Please select a category</p>
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddDetail;
