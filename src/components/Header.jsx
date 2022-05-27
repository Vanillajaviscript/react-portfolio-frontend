import { Link } from "react-router-dom";


const Header = () => {
  const header = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return (
    <div className="header">
      <h1>Welcome to my Portfolio</h1>
      <header style={header}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </header>
    </div>
  )
}

export default Header;