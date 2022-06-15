import React from 'react';

function fullHour(day) {
    if ((day+'').length === 1) {
        day = '0' + day
    }
    return day
}

const CurrentDayHours = ({info}) => {
    const time = new Date(info.time);
    return (
        <div className={'hour-list__item'}>
            <div>
                <div>
                    <p>{fullHour(time.getHours())}</p>
                </div>
                <div>
                    <img src={info.condition.icon} alt=""/>
                </div>
                <div>
                    <p>
                        {info.temp_c} C
                    </p>
                </div>
                <div>
                    <p>
                        {info.chance_of_rain} %
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CurrentDayHours;