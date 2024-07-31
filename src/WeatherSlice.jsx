import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('fetchData',
    async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const resp = await fetch(url);
            const data = await resp.json();
            console.log(data);
            return {
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                visibility: data.visibility,
                temperature: data.main.temp,
                place: data.name,
            };
        } catch (error) {
            console.log(error);
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.weather = action.payload;
            })

    }
});

export default weatherSlice.reducer;
