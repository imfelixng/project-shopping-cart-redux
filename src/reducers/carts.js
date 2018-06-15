import * as types from '../constants/actionTypes';

let data = JSON.parse(localStorage.getItem('carts'));
let initState = data ? data : [];


const product = (state = initState, action) => {
    let {product} = action;
    let quantity = 1;
    switch(action.type){
        case types.ADD_CART: {
            if(state.length > 0){
                let index = findIndex(product, state);
                if(index !== -1 ){
                    let currentQuantity = state[index].quantity;
                    state[index].quantity = currentQuantity + quantity;
                }else{
                    state.push({
                        product,
                        quantity
                    });  
                }

            }else{
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('carts',JSON.stringify(state));
            return [...state];
        }
        case types.DELETE_CART: {
            let index = findIndex(action.cart.product, state);
            state.splice(index, 1);
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        }
        case types.GIAM_SO_LUONG: {
            let index = findIndex(action.cart.product, state);
            let quantity = state[index].quantity;
            if(quantity > 1 ){
                state[index].quantity = quantity - 1;
            }
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];
        }
        case types.TANG_SO_LUONG: {
            let index = findIndex(action.cart.product, state);
            let quantity = state[index].quantity;
            state[index].quantity = quantity + 1;
            localStorage.setItem('carts', JSON.stringify(state));
            return [...state];   
        }
        default: return [...state];
    }
}

let findIndex = (product, carts) => {
    let indexProduct = -1;
    carts.forEach((cart, index) => {
        if(cart.product.id === product.id){
            indexProduct = index;
        }
    });

    return indexProduct;
}

export default product;