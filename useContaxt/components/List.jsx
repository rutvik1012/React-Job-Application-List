import React, { useContext, useState } from "react";
import ListContext from "../ListContext";
import {
  Link
} from "react-router";
const List = () => {
  const { name } = useContext(ListContext);

  const [filterCategory, setFilterCategory] = useState("All");

  const filteredList =
    filterCategory === "All"
      ? name
      : name.filter((data) => data.category === filterCategory);

  return (
    <div className="container_list">
      
      <div className="main_list">
        <div className="head_list">
            <h2>List of Job Apply</h2>
            
        <div>
            <label >Filter The Job:</label>
            <select
        
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="fullstack">Fullstack</option>
        <option value="devops">DevOps</option>
      </select>
        </div>
        
      <Link to={'/'}><button className="addnew_btn" >Add Another</button></Link>
      
        </div>
        <table className="main_list">
          <thead>
            <tr>
              <th className="no">Sr.No</th>
              <th className="name">Name</th>
              <th className="email">Email</th>
              <th className="job">Job Desc</th>
            </tr>
          </thead>
          {filteredList.map((data, index) => (
            <tbody key={index}>
              <tr className="details">
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td> {data.category}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default List;
