import { Link } from "react-router-dom";

const styles = {
  title:{
    textDecoration: 'none',
    color: 'black'
  }
}

const Navigator = () => {
  return (
    <div className="navigator">
      <Link to="/" style={styles.title}>Home</Link>
      &nbsp; |&nbsp;
      <Link to="/courses" style={styles.title}>Courses</Link>
      &nbsp; |&nbsp;
      <Link to="/students" style={styles.title}>Students</Link>
    </div>
  );
};

export default Navigator;
