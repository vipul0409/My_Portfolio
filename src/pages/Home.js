import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Connect from './Connect'
import pictures from "../images/photo.png"

const Home = () => {
  return (
    <>

    <div className="w-full min-h-full p-0 md:pb-[100px] pt-4 md:pt-0 flex justify-around items-center flex-col md:flex-row " >
        <div className="font-Poppins ml-0 md:ml-8 mt-12 md:mt-0">
         <h1 className="text-[40px] md:text-5xl p-2">Hello </h1>
          <h1 className="text-[30px] md:text-4xl p-1">
            This is <span className="font-Rajdhani ">Vipul Bansal</span>
          </h1>
          <h1 className="text-[40px] md:text-5xl p-2">
            I am {""}
            <span className="text-red-400">
              <Typewriter
                words={["Developer", "Designer"]}
                loop={true}
                cursor
                typeSpeed={70}
                deleteSpeed={60}
              />
            </span>
          </h1>
          <div className="flex flex-row gap-7 ml-2 mt-3 md:mt-4">
            <Link to="https://www.instagram.com/_vipul04/" target="_blank">
              <i className="fa-brands fa-instagram text-black dark:text-white text-3xl hover:animate-bounce "></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/vipul-bansal-3b7b17243/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin text-black dark:text-white text-3xl hover:animate-bounce "></i>
            </Link>
            <Link to="#" target="_blank">
              <i className="fa-brands fa-github text-black dark:text-white text-3xl hover:animate-bounce "></i>
            </Link>
          </div>
          </div>
          
          <div className="w-full md:w-[500px] h-[500px] flex items-start md:items-center md:mx-0">
          <img src= {pictures} alt="" className="w-100 h-100" />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <div className="my-14"></div>
      <Connect />
          
    </>
  )
} 

export default Home
