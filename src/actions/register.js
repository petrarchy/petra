import {REGISTER_USERNAME, REGISTER_DISPLAYNAME, REGISTER_SUBMIT} from "./types";
import query from "./query";

export function setUsername(value) {
    return {
        type: REGISTER_USERNAME,
        value
    };
}

export function setDisplayName(value) {
    return {
        type: REGISTER_DISPLAYNAME,
        value
    };
}

export function submit() {
    return {
        type: REGISTER_SUBMIT
    };
}

export function attemptRegister(name, password, displayName) {
    return async function (dispatch) {
        const res = await query({query: `mutation {
            createUser(data:{uid:"${name}", password:"${password}", displayName:"${displayName}"})
        }`});
        console.log("res: ", await res.json());
        dispatch(submit());
    };
}
