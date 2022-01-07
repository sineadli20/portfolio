import React from 'react';
import "./Project.css";

export default function Project ({title, description, images}) {
    return (
        <div className="project-container">
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
            <div className="images-container">
                {images.map(image => <img className="image" style={{width: "calc(" + 100/images.length + "% - 10px)"}} src={image}/>)}
            </div>
        </div>
    )
}