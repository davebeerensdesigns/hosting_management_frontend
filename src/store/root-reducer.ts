import {combineReducers} from "redux";

import {userReducer, jwtReducer} from "./user/user.reducer";

export const rootReducer = combineReducers({
    auth: jwtReducer,
    user: userReducer
});