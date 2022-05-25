import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";


const App = () => {
  const url = "https://hidden-gorge-87211.herokuapp.com/";
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home url={url}/>} />
          <Route path="/projects" element={<Projects url={url}/>} />
          <Route path="/about" element={<About url={url}/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
