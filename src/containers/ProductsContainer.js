import React, { Component } from 'react';
import Products from '../components/Products/Products';
import Product from '../components/Product/Product';
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';
import * as actions from '../actions/index';

class ProductsContainer extends Component {


    render() {
        let {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products){
        let result = null;
        let {onAddCart, onChangeMsg} = this.props;
        result = products.map((product) => {
            return <Product
                        key = {product.id}
                        product = {product}
                        onAddCart = {onAddCart}
                        onChangeMsg = {onChangeMsg}
                    />
        });
        return result;
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}


const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddCart: (product) => {
            dispatch(actions.add_cart(product));
        },
        onChangeMsg: (msg) => {
            dispatch(actions.change_msg(msg));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);