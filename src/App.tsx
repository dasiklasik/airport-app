import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./components/MainPage";
import {AuthPage} from "./components/AuthPage";
import {AirportDetailedPage} from "./components/AirportDetailedPage";
import {Nav} from "./components/Nav";

function App() {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path={'/airport/:id'} element={<AirportDetailedPage/>}/>
            </Routes>
        </>
    );
}

export default App;
