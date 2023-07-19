import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Navbar from "./pages/Navbar";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";



const App = () => {
  return (
    // <div className="dark:bg-slate-900 dark:text-gray-100 bg-gray-200 text-black w-full min-h-screen">
    <div className="dark:bg-black dark:text-gray-100 bg-gray-200 text-black w-full min-h-screen">
      
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/skills" Component={Skills} />
        <Route exact path="/projects" Component={Projects} />
        <Route exact path="/connect" Component={Connect} />
      </Routes>
      <Footer/>
      
    </div>
  )
}
export default App;
