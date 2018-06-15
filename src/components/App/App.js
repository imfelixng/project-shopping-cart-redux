import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductsContainer from '../../containers/ProductsContainer';
import CartsContainers from '../../containers/CartsContainers';
import MessagesContainer from '../../containers/MessagesContainer';
class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header/>
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />

            {/* Message */}
            <MessagesContainer />
            {/* Cart */}
            <CartsContainers />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>

    );
  }
}

export default App;
