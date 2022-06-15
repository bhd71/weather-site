import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCloudMoonRain, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './styleLayout.css'

const Layout = ({city}) => {
    const onClickHandler = () => {
        city.setCity(document.getElementById('cityInput').value)
    }
    return (
        <div className={'container'}>
            <header>
                <div>
                    <FontAwesomeIcon icon={faCloudMoonRain} className={'icon'}/>
                </div>
                <div className={'layout_block'}>
                    <span>City</span>
                    <input type='text' id={'cityInput'}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={'icon_search'} onClick={onClickHandler}/>
                </div>
            </header>
            <Outlet city={city}/>
        </div>
    );
};

export default Layout;