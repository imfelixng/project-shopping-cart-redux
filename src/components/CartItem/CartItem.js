import React, { Component } from 'react';
import * as messages from '../../constants/message';
class CartItem extends Component {


    onDeleteCart = (cart) => {
      this.props.onDeleteCart(cart);
      this.props.onChangeMsg(messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    onGiamSoLuong = (cart) => {
      this.props.onGiamSoLuong(cart);
      this.props.onChangeMsg(messages.MSG_UPDATE_CART_SUCCESS);
    }
    onTangSoLuong = (cart) => {
      this.props.onTangSoLuong(cart);
      this.props.onChangeMsg(messages.MSG_UPDATE_CART_SUCCESS);
    }

    render() {
        let {cart} = this.props;
        return (
                <tr>
                      <th scope="row">
                        <img src = {cart.product.img} alt = "abc" className="img-fluid z-depth-0" />
                      </th>
                      <td>
                        <h5>
                          <strong>{cart.product.name}</strong>
                        </h5>
                      </td>
                      <td>{cart.product.price}$</td>
                      <td className="center-on-small-only">
                        <span className="qty">{cart.quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                          <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light" onClick = {() => this.onGiamSoLuong(cart)}>
                            <a>—</a>
                          </label>
                          <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light" onClick = {() => this.onTangSoLuong(cart)}>
                            <a>+</a>
                          </label>
                        </div>
                      </td>
                      <td>{this.showSubTotal(cart.product.price, cart.quantity)}$</td>
                      <td>
                        <button type="button" onClick = {() => this.onDeleteCart(cart)} className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title  = "remove item"data-original-title="Remove item">
                          X
                        </button>
                      </td>
                </tr>
        );
    }

    showSubTotal(price, quantity){
      return price * quantity;
    }
}

export default CartItem;