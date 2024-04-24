import React from 'react';
import exp from './Data/experience.json'
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <>
      <div className="container exp my-5">
        <h1 style={{display:"flex", justifyContent:"center"}} >Experience</h1>
        {
          exp.map((data)=>{
            return(
            <ExperienceCard details={data} key={data.id}/>
          )})
        }
      </div>
    </>
  )
}

export default Experience
