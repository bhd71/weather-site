import React from 'react';
import CornerDayData from "./CornerDayData";

const LeftDay = ({info}) => {
    if (info.currentDayData.picked_date === 0) {
        return <div style={{width: '20%'}}></div>
    }

    const onClickListener = () => {
        info.setCurrentDayData(prevState => {
            return {
                ...prevState,
                picked_date: index
            }
        })
    }
    const index = (info.currentDayData.picked_date - 1);
    const obj = info.currentDayData.next_days[index].day
    const weekday = new Date(info.currentDayData.next_days[index].date).toLocaleString('en-us', {weekday: 'long'});
    return (
        <div onClick={onClickListener} className={'corner-day'}>
            <CornerDayData weekday={weekday} obj={obj}/>
        </div>
    );
};
export default LeftDay;