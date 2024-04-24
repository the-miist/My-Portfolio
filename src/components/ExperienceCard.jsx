import React from 'react'

const ExperienceCard = (props) => {
  return (
    <>
      <div className="ex-items text-center text-dark"
      data-aos="zoom-in"
      data-aos-duration="1000">
        <div className="left">
            <img src={`/assets/${props.details.imageSrc}`} alt="" />
        </div>
        <div className="right">
            <h2>{props.details.role}</h2>
            <h4>
                {`${props.details.startDate} ${props.details.endDate} ${props.details.location}`}
            </h4>
            <h5>{props.details.experiences[0]}</h5>
            <h5>{props.details.experiences[1]}</h5>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard
