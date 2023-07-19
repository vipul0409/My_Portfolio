import React from "react";
import { Link } from "react-router-dom";
import project from "../images/project1.png";

const Projects = () => {
  const ProjectCard = (props) => {
    return (
      <div className="card w-[160px] md:w-[360px] h-[90px] md:h-[210px] place-content-center dark:shadow-[3px_3px_15px_white] shadow-[3px_3px_15px_black] overflow-hidden relative rounded-xl">
        <img
          src={props.src}
          alt="img"
          className="w-[160px] md:w-[360px] h-[90px] md:h-[250px] rounded-xl object-fill"
        />
        <Link to={props.link} target="_blank">
          <div className="intro absolute w-[160px] md:w-[360px] h-[10px] p-3 text-white box-border bottom-0 z-10 bg-primary">
            <p className=" text-sm md:text-lg mb-2 ">{props.text2}</p>
            <p className=" text-sm mb-2 md:block hidden">{props.text}</p>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col items-center pt-7 pb-16 dark:bg-darkBg bg-lightBg ">
      <div className="tracking-widest mb-12">
        <h1 className="text-4xl font-serif uppercase ">My Projects</h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-10 font-Poppins capitalize ">
        <ProjectCard
          text="Personal Portfolio Responsive App developed by the help of React & Tailwind CSS "
          src={project}
          text2="Personal Portfolio App"
          link=""
        />
      
       
        {/* <ProjectCard text="hey this is Vipul the developer" src={img1} />   */}
      </div>
    </div>
  );
};
export default Projects;
