import React from 'react'

const SkillCard = (props) => {
  return (
    <>
        <div className="item text-dark"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <img src={`/assets/${props.details.imageSrc}`} alt="" />
            <h3>{props.details.title}</h3>
        </div>
    </>
  )
}

export default SkillCard
