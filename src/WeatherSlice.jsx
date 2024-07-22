// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// export const fetchData = createAsyncThunk('weatherData',
//      async (city) => {
//         try {
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`
//             const resp = await fetch(url)
//             const data = await resp.json()
//             return data
//             console.log(data);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// )

// const initialState = {
//     data: {
//       name: 'Default City',
//       main: {
//         temp: 20
//       },
//       weather: [
//         {
//           description: 'clear sky'
//         }
//       ]
//     },
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null
//   };

// const Myslice = createSlice({
//     name:'weather',
//     initialState,
//     reducers:{
//        update:(state,action)=>{
//           return state
//        }
//     },
//     extraReducers:{
//         extraReducers: (builder) => {
//             builder
//               .addCase(weatherData.pending, (state) => {
//                 state.status = 'loading';
//               })
//               .addCase(weatherData.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.data = action.payload;
//               })
//               .addCase(weatherData.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.payload;
//               });
//           }
//     }
// })

// export default Myslice.reducer
// export const{update} =Myslice.actions
