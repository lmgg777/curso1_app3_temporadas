import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer:{
        text: "Yeah! It's summer!",
        iconName: 'sun'
    },
    winter:{
        text: "Brrr! It's winter!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer':'winter';
    } else {
        return lat > 0 ? 'winter':'summer';
    }
}

const SeasonDisplay = props => {
const currentMonth = new Date().getMonth() + 1;
const season = getSeason(props.lat, currentMonth);
const {text, iconName} = seasonConfig[season];
 
    return(
        <div className={`season-display ${season}`}>
        <i className={`left-icon massive ${iconName} icon`}></i>
            <h1>{text}</h1>
        <i className={`right-icon massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeasonDisplay;