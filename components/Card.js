import React from "react"

export default function Card(props){
    return (
        <div className="card--container">
            <img className="card--image" src={props.imageUrl} alt={`image of ${props.title}`}/>
            <div className="card--location">
                <img src="./images/location_icon.png" alt="icon for location"/>
                <h3>{props.location}</h3>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="card--title">{props.title}</h1>
            <p className="card--dates">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>
        </div>
    )
}