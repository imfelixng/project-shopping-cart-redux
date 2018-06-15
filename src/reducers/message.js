import * as types from '../constants/actionTypes';
import * as messages from '../constants/message';
let initState = messages.MSG_WELCOME;

const product = (state = initState, action) => {
    switch(action.type){
        case types.CHANGE_MSG : {
            state = action.msg;
            return state;
        }
        default: return state;
    }
}

export default product;