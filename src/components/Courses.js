import React, { useEffect, useState } from "react";
import { list } from "../services/apiService";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    list("courses", data => {
      setCourses(data);
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
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course name</th>
            <th>Points</th>
            <th>
              <Link to="/courses/0" style={styles.title}>Add new</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {courses.map(c => (
            <tr key={c._id}>
              <td>{c.name}</td>
              <td>{c.points}</td>
              <td>
                <Link to={`/courses/${c._id}`} style={styles.edit}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
