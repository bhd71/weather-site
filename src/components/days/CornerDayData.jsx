import React from 'react';

const CornerDayData = ({obj, weekday}) => {
    console.log(obj.condition)
    return (
        <div className={'day'} >
            <div>
                <p style={{margin:'0px'}}>{obj.condition.text}</p>
            </div>
            <div className={'day_img'}>
                <img src={obj.condition.icon} alt=""/>
            </div>
            <div>
                <p>max-temperature: {obj.maxtemp_c} C</p>
                <p>min-temperature: {obj.mintemp_c} C</p>
            </div>
            <div>
                <p>max-wind: {obj.maxwind_kph} kph</p>
            </div>
            <div>
                <p>{weekday}</p>
            </div>
        </div>
    );
};

export default CornerDayData;