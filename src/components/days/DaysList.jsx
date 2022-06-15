import React from 'react';
import CurrentDayHours from "./CurrentDayHours";
import './styleDay.css'

const DaysList = ({days_info}) => {
    return (
        <div className={'hour_list'}>
            {days_info.map(element => {
                return <CurrentDayHours info={element} key={new Date(element.time)}/>
            })
            }
        </div>
    );
};


export default DaysList;