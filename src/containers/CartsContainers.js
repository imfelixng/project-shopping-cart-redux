import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as messages from '../constants/message';
import Cart from '../components/Cart/Cart';
import CartItem from '../components/CartItem/CartItem';
import CartResult from '../components/CartResult/CartResult';
import * as actions from '../actions/index';
class CartsContainers extends Component {
    render() {
        let {carts} = this.props;
        return (
            <Cart>
                {this.showOnCart(carts)}
                {this.showTotalPrice(carts)}
            </Cart>
        );
    }

    showOnCart = (carts) =>{
        let result =    <tr>
                            <td colSpan = {5} className = "text-center">{messages.MSG_CART_EMPTY}</td>
                        </tr>;
        if(carts.length > 0){
            result = carts.map((cart,index) => {
                return <CartItem 
                            cart = {cart} 
                            key = {index}
                            onDeleteCart = {this.props.onDeleteCart}
                            onGiamSoLuong = {this.props.onGiamSoLuong}
                            onTangSoLuong = {this.props.onTangSoLuong}
                            onChangeMsg = {this.props.onChangeMsg}
                        />;
            });
        }
        return result;
    }

    showTotalPrice = (carts) => {
        let total = 0;
        if(carts.length > 0){
            carts.forEach((cart) => {
                total += cart.product.price * cart.quantity;
            });
            return <CartResult >{total}</CartResult>;
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteCart: (cart) => {
            dispatch(actions.delete_cart(cart));
        },
        onGiamSoLuong: (cart) => {
            dispatch(actions.giam_so_luong(cart));
        },
        onTangSoLuong: (cart) => {
            dispatch(actions.tang_so_luong(cart));
        },
        onChangeMsg: (msg) => {
            dispatch(actions.change_msg(msg));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartsContainers);