import {takeLatest, put, all, call} from "typed-redux-saga/macro";
import {USER_ACTION_TYPES} from "./user.types";
import {
    UsernameSignInStart,
    signInFailed, signInSuccess
} from "./user.action";

import {
    signInAuthUserWithUsernameAndPassword
} from "../../utils/springboot/springboot.utils";

export function* getSnapshotFromJwtToken(jwt: string) {
    try {
        yield* put(signInSuccess(jwt));
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* signInWithUsername({payload: {username, password}}: UsernameSignInStart) {
    try {
        const userToken = yield* call(signInAuthUserWithUsernameAndPassword, username, password);

        if(userToken) {
            const jwt = userToken['jwt'];
            yield* call(getSnapshotFromJwtToken, jwt);
        }
    } catch (error) {
        yield* put(signInFailed(error as Error));
    }
}

export function* onUsernameSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.USERNAME_SIGN_IN_START, signInWithUsername);
}

export function* userSagas() {
    yield* all([
        call(onUsernameSignInStart)
    ]);
}