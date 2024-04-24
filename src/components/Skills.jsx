import React from 'react';
import Skill from './Data/skills.json'
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <>
      <div className="container skills my-5" id='skills'>
        <h1 style={{display:"flex", justifyContent:"center"}} >Skills</h1>
        <div className="items my-3">
            {
            Skill.map((data)=>{
                return(
                <SkillCard details={data} key={data.id}/>
            )})
            }
        </div>
      </div>
    </>
  )
}

export default Skills
