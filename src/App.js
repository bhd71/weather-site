import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, BrowserRouter, Routes
} from 'react-router-dom';
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import './style.css'

function App() {
    const [city, setCity] = useState('Lviv')
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<Layout city={{city,setCity}}/>}>
                    <Route index element={<MainPage city={city}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
