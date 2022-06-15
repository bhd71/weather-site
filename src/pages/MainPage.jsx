import React, {useEffect, useState} from 'react';
import axios from "axios";
import Day from "../components/days/Day";
import CurrentDayHours from "../components/days/CurrentDayHours";
import DaysList from "../components/days/DaysList";
import LeftDay from "../components/days/LeftDay";
import RightDay from "../components/days/RightDays";

function get23hours(array, picked_date) {
    switch (picked_date) {
        case 0: {
            const time = new Date();
            return array.filter((element => {
                if ((new Date(element.time).getDate() === time.getDate() && new Date(element.time).getHours() >= time.getHours())
                    ||
                    (new Date(element.time).getDate() - time.getDate()) === 1 &&
                    new Date(element.time).getHours() < time.getHours()) {
                    return element
                }
            }))
        }
        case 1: {
            return array.filter((element, index) => {
                if (index > 23 && index < 49)
                    return element
            })
        }
        case 2: {
            return array.filter((element, index) => {
                if (index > 47 && index < 72)
                    return element
            })
        }
    }

}

const MainPage = ({city}) => {

    const [currentDayData, setCurrentDayData] = useState({
        picked_date: 0,
        location: {},
        info: {}
    })

    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=c694d2866dcd4c9ea3e230811222405&q=${city}&days=5&aqi=no&alerts=yes`
    useEffect(() => {
        axios.get(apiUrl)
            .then((data) => {
                setCurrentDayData({
                    location: {
                        ...data.data.location
                    },
                    info: {
                        ...data.data.current
                    },
                    info_per_hour: [...data.data.forecast.forecastday[0].hour,
                        ...data.data.forecast.forecastday[1].hour,
                        ...data.data.forecast.forecastday[2].hour,
                    ],
                    next_days: data.data.forecast.forecastday,
                    picked_date: 0
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [apiUrl])
    if (Object.keys(currentDayData.location).length === 0) {
        return (
            <div>
                <p> City didnt chosen</p>
            </div>
        )
    }
    return (
        <div>
            <div className={'selectedDay'}>
                <div className={'day_title'}>
                    <p>{currentDayData.location.country} {currentDayData.location.name}</p>
                </div>
                <div className={'day-list'}>
                    <LeftDay info={{currentDayData, setCurrentDayData}}/>
                    <Day info={currentDayData}/>
                    <RightDay info={{currentDayData, setCurrentDayData}}/>
                </div>
                <div className={'hour-list'}>
                    <DaysList days_info={get23hours(currentDayData.info_per_hour, currentDayData.picked_date)}/>
                </div>
            </div>

        </div>

    );
};

export default MainPage;


