import logo from "../assets/images/paragon.png";
import Navigator from "./Navigator";

const styles = {
  title:{
    textDecoration: 'none'
  }
}

const AppHeader = () => {
  return (
    <header className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="left">
        <h2>My React App</h2>
      </div>
      <div className="right" style={styles.title}>
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;
