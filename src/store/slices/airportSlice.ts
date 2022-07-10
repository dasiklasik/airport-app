import {IAirport} from "../../models/models";
import {createSlice} from "@reduxjs/toolkit";

type AirportState = {
    loading: boolean
    error: string
    airports: IAirport[]
}

const initialState: AirportState = {
    loading: false,
    error: '',
    airports: [],
}

// export const airportSlice = createSlice({
//
// })