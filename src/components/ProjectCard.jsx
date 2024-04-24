import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="card" 
    data-aos="flip-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    style={{ width: "18rem" }}>
      <div className="img">
        <img
          src={`/assets/${props.details.imageSrc}`}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.details.title}</h5>
        <p className="card-text">{props.details.description}</p>
        <a href={props.details.demo} className="btn btn-primary mx-3">
          Site
        </a>
        <a href={props.details.source} className="btn btn-warning">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
