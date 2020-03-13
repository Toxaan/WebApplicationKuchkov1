import { CHANGE_MODAL_VISIBLE, BLOCKUSER, BLOCKEDUSERS, UNLOCKUSERS } from './action-types'

export const showModalAction = (record) => {
    return {
        type: CHANGE_MODAL_VISIBLE,
        content: record
    }
}

export const blockUser = (index) => {
    return {
        type: BLOCKUSER,
        blockUserId: index
    }
}

export const blockedUsers = (arr) => {
    return {
        type: BLOCKEDUSERS,
        blockedUsers: arr
    }
}

export const unlockUser = (index) => {
    return {
        type: UNLOCKUSERS,
        unlockUserId: index
    }
}
