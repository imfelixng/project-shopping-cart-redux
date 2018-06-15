import React, { Component } from 'react';
import Message from '../components/Message/Message';
import {connect} from 'react-redux';
import PropTypes  from 'prop-types';

class MessagesContainer extends Component {

    render() {
        let {message} = this.props;
        return (
            <Message 
                message = {message}
            />
            
        );
    }
}

MessagesContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessagesContainer);