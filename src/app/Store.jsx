import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/UserSlice"
import movieReducer from "../features/movie/movieSlice"

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    // middleware: getDefaultMiddleware({
    //     serializableCheck: false
    // })
})