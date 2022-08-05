import { AnyAction } from "redux";
import {UserData} from "../../utils/springboot/springboot.utils";
import {signInFailed, signInSuccess} from "./user.action";


export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export type JwtState = {
    readonly jwt: string | null;
}

const INITIAL_JWT_STATE: JwtState = {
    jwt: null
}

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {

    // if(signInSuccess.match(action)) {
    //     return {
    //         ...state,
    //         currentUser: action.payload
    //     }
    // }
    //
    // if(signInFailed.match(action)) {
    //     return {
    //         ...state,
    //         error: action.payload
    //     }
    // }

    return state;
}

export const jwtReducer = (state = INITIAL_JWT_STATE, action: AnyAction) => {

    if(signInSuccess.match(action)) {
        return {
            ...state,
            jwt: action.payload
        }
    }

    if(signInFailed.match(action)) {
        return {
            ...state,
            error: action.payload
        }
    }

    return state;
}