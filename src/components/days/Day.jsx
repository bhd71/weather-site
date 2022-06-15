import React from 'react';
import './styleDay.css'
import CornerDayData from "./CornerDayData";

const Day = ({info}) => {
    const obj = info.next_days[info.picked_date].day
    const weekday = new Date(info.next_days[info.picked_date].date).toLocaleString('en-us', {weekday: 'long'});
    return (
        <div className={'main-day'}>
            <CornerDayData obj={obj} weekday={weekday} />
        </div>
    );
};

export default Day;