import React, { useEffect, useState } from "react";
import { list } from "../services/apiService";
import { Link } from "react-router-dom";

const Students = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    list("students", data => {
      setStudents(data);
    });
  }, []);

  const styles = {
    title: {
      color: 'white',
      textDecoration: 'none'
    },
    edit: {
      color: 'black',
      textDecoration: 'none',
    }
  };
  return (
    <div className="container">
      <h1>Students</h1>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Year of Birth</th>
            <th>Adress</th>
            <th>
              <Link to="/students/0" style={styles.title} >Add new</Link>
            </th>
          </tr>
        </thead>
        <tbody>
        {students.map(s => (
            <tr key={s._id}>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.yearOfBirth}</td>
              <td>{s.adress}</td>
              <td>
                <Link to={`/students/${s._id}`} style={styles.edit}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
