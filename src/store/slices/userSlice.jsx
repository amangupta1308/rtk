import {createSlice} from '@reduxjs/toolkit';
import { clearAllUsers } from '../actions';

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            // state.filter((val,id)=>{return id!=action.payload});
            // console.log(action.payload);
            state.splice(action.payload, 1);
        },
        // removeAllUsers(state, action) {
        //     // state.splice(0,state.length);
        //     return [];
        // },
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers, ()=>{return []})
    }
})
// console.log(userSlice.actions);
export default userSlice.reducer;
export const {addUser, removeUser} = userSlice.actions;