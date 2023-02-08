import React from 'react';


const Card = (props) => {

    return (
        <div className="card">
            <div className="header">
                {props.number}
            </div>
            <div className="info">
                {props.info}
            </div>
        </div>
    )
}

export default Card;