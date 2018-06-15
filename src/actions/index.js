import * as types from '../constants/actionTypes';
export const list_all = () => {
    return {
        type : types.LIST_ALL
    }
}
export const add_cart = (product) => {
    return {
        type : types.ADD_CART,
        product
    }
}
export const change_msg = (msg) => {
    return {
        type : types.CHANGE_MSG,
        msg
    }
}
export const delete_cart = (cart) => {
    return {
        type : types.DELETE_CART,
        cart
    }
}
export const giam_so_luong = (cart) => {
    return {
        type : types.GIAM_SO_LUONG,
        cart
    }
}
export const tang_so_luong = (cart) => {
    return {
        type : types.TANG_SO_LUONG,
        cart
    }
}

