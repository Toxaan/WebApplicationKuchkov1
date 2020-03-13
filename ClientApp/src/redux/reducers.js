import {
    combineReducers,
} from 'redux';
import { CHANGE_MODAL_VISIBLE, BLOCKUSER, BLOCKEDUSERS, UNLOCKUSERS} from './action-types'

const initialState = {
    visible: false,
    content: null,
    blockUserId: []
}

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODAL_VISIBLE:
            return {
                ...state,
                visible: !state.visible,
                content: action.content
            };
        case BLOCKUSER:
            var blUs = fetch(`/api/Users/BlockUser?recordId=${action.blockUserId}`);
            if (blUs) {
                var old = state.blockUserId.concat(action.blockUserId);
                return {
                    ...state,
                    blockUserId: old,
                    visible: !state.visible
                };
            }
            
        case BLOCKEDUSERS:
            var old = state.blockUserId.concat(action.blockedUsers);
            return {
                ...state,
                blockUserId: old
            };
        case UNLOCKUSERS:
            var unlUs = fetch(`/api/Users/BlockUser?recordId=${action.unlockUserId}`);
            if (unlUs) {
                var old = state.blockUserId.slice();
                var newArr = old.filter(e => e !== action.unlockUserId);
                return {
                    ...state,
                    blockUserId: newArr,
                    visible: !state.visible
                };
            }
    }

    return state;
};

export const reducers = combineReducers({
    modal,
});
