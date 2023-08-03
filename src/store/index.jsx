import userSlice from './slices/userSlice';
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        // users: userSlice.reducer,
        users: userSlice,
    }
});

export default store;