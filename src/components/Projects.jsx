import React from 'react';
import projects from './Data/projects.json'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <div className="container proj my-5">
        <h1 style={{display:"flex", justifyContent:"center"}} >Projects</h1>
            <div className="row my-5 ">
                {
                projects.map((data)=>{
                    return(
                    <ProjectCard details={data} key={data.key}/>
                )})
                }
            </div>
      </div>
    </>
  )
}

export default Projects
