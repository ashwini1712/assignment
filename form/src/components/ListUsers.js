import React from "react";
import { useSelector } from "react-redux";
import "../styles/styles.css";

const ListUsers = ({ setPageHandle }) => {
  let values = useSelector((state) => {
    return state.formValue;
  });

  const handleNavigate = (e) => {
    e.preventDefault();
    setPageHandle(true);
  };
  return (
    <div>
      <form>
        <h1>List of Users</h1>
        <table id="customers" style={{ border: 1 }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {values.map((ele, i) => {
              return (
                <tr key={i}>
                  <td>{ele.fullname}</td>
                  <td>{ele.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
      <input type="button" value="Add More Values" onClick={handleNavigate} />
    </div>
  );
};

export default ListUsers;
