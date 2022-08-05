import {USER_ACTION_TYPES} from "./user.types";
import {createAction, withMatcher, Action, ActionWithPayload} from "../../utils/reducer/reducer.utils";

export type UsernameSignInStart = ActionWithPayload<USER_ACTION_TYPES.USERNAME_SIGN_IN_START, {username: string, password: string}>

export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, string>

export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>

export const usernameSignInStart = withMatcher((username: string, password: string): UsernameSignInStart => {
    return createAction(USER_ACTION_TYPES.USERNAME_SIGN_IN_START, {username, password})
})

export const signInSuccess = withMatcher((jwt: string): SignInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, jwt)
})

export const signInFailed = withMatcher((error: Error): SignInFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
})