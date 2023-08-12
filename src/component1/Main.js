import React from "react";

export default function Main(props){
    return (
        <div className="motherDiv">
            <div className="imgDiv">
                <img src={props.imageUrl} />
            </div>
            <div className="infoDiv">
                <h2>{props.title}</h2>
                <p className="googleLink"> {props.googleMapsUrl}</p>
                <p className="startDate">{props.startDate} - <span className="endDate">{props.endDate}</span></p>
                <p className="description">{props.description}</p>

            </div>
        </div>
    )
}