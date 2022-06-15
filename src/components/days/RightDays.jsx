import React from 'react';
import CornerDayData from "./CornerDayData";

const RightDay = ({info}) => {
    if (info.currentDayData.picked_date === 2) {
        return <div style={{width: '20%'}}></div>
    }
    const onClickListener = () => {
        info.setCurrentDayData(prevState => {
            return {
                ...prevState,
                picked_date: info.currentDayData.picked_date++
            }
        })
    }
    const index = ++info.currentDayData.picked_date;
    const obj = info.currentDayData.next_days[index].day
    const weekday = new Date(info.currentDayData.next_days[index].date).toLocaleString('en-us', {weekday: 'long'});
    return (
        <div onClick={onClickListener} className={'corner-day'}>
            <CornerDayData obj={obj} weekday={weekday}/>
        </div>
    );
};

export default RightDay;