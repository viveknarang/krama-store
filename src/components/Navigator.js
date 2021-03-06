import React from 'react';
import './Navigator.css'

class Navigator extends React.Component {

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
          <nav>
            <div class="nav-wrapper purple darken-1 z-depth-3">
              <ul id="nav-mobile" class="left">
                <li><a href="/home">Home</a></li>
                <li><a href="/category/all-categories">Categories</a></li>
              </ul>
              <ul id="nav-mobile" class="right">
                <li><a href="/settings"><i class="material-icons">settings</i></a></li>
                <li><a href="/shopping-cart"><i class="material-icons">shopping_cart</i></a></li>
                <li><a href="/my-orders">My Orders</a></li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </div>
          </nav>
      </React.Fragment>    
  );
  }
}

export default Navigator