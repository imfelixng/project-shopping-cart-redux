import React, { Component } from 'react';
import * as messages from '../../constants/message';
class Products extends Component {

    onAddCart = (product)=>{
      this.props.onAddCart(product);
      this.props.onChangeMsg(messages.MSG_ADD_TO_CART_SUCCESS);
    }

    render() {
      let {product} = this.props;
      return (
                <div className="col-lg-4 col-md-6 mb-r">
                  <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                      <img src= {product.img} className="img-fluid" alt = "abc" />
                      <a>
                        <div className="mask waves-light waves-effect waves-light" />
                      </a>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                        <strong>
                          <a>{product.name}</a>
                        </strong>
                      </h4>
                      <ul className="rating">
                        <li>
                          {this.showRating(product.rating)}
                        </li>
                      </ul>
                      <p className="card-text">
                        {product.description}
                      </p>
                      <div className="card-footer">
                        <span className="left">{product.price}$</span>
                        <span className="right">
                          <a className="btn-floating blue-gradient"  onClick = {() => this.onAddCart(product)} data-toggle="tooltip" data-placement="top" title = "Add to cart" data-original-title="Add to Cart">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
        );
    }

    showRating(rating){
      let result = [];
      for(let i = 1; i<= rating; i++){
        result.push(<i className="fa fa-star" key = {i}/>);
      }

      for(let i = 1; i<= (5 - rating) ; i++){
        result.push(<i className="fa fa-star-o" key = {i * 10}/>);
      }

      return result;
    }
}

export default Products;