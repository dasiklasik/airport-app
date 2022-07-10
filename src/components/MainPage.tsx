import React from "react";
import {Search} from "./Search";
import {Filter} from "./Filter";
import {AirportCard} from "./AirportCard";


export const MainPage = () => {
    return (
        <div className={'container mx-auto max-w-[760px] pt-5'}>
            <Search/>
            <Filter/>
            <AirportCard/>
        </div>
    )
}