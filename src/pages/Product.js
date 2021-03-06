import React from 'react';
import './Product.css';
import ProductWidget from '../components/ProductWidget';
import MultiProductWidget from '../components/MultiProductWidget';

class Product extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>

        <div class="product-container">
          <div class="row">
            <div class="col l5 m12 s12">

                    <ProductWidget auto={false}/>

            </div>
            <div class="col l7 m12 s12">

                    <div class="row"><div class="col s12 align-left"><h5>Product Name</h5></div></div>

                    <div class="row">
                      <div class="col s12 m12 l6 align-left"><span class="done-tag"><i class="material-icons">done</i>In Stock!</span></div>
                      <div class="col s12 m12 l6 align-right"><h5>$ 1234.5</h5></div>
                    </div>

                    <div class="row">
                      <div class="col s12">
                        <p class="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                        </p>
                      </div>
                    </div>

                    <div class="row">
                        <div class="col s12 m6 l3">
                              <select>
                                <option value="" disabled selected>Property</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                        </div>
                        <div class="col s12 m6 l3">
                              <select>
                                <option value="" disabled selected>Property</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                        </div>
                        <div class="col s12 m6 l3">
                              <select>
                                <option value="" disabled selected>Property</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                        </div>
                        <div class="col s12 m6 l3">
                              <select>
                                <option value="" disabled selected>Property</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                        </div>
                    </div>

                    <div class="row">
                      <div class="col s12 m12 l12">
                          <ul class="collapsible">
                            <li>
                              <div class="collapsible-header"><i class="material-icons">featured_play_list</i>Product Details</div>
                              <div class="collapsible-body">

                                      <table class="striped">
                                        <thead>
                                          <tr>
                                              <th>Name</th>
                                              <th>Item Name</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Alvin</td>
                                            <td>Eclair</td>
                                          </tr>
                                          <tr>
                                            <td>Alan</td>
                                            <td>Jellybean</td>
                                          </tr>
                                          <tr>
                                            <td>Jonathan</td>
                                            <td>Lollipop</td>
                                          </tr>
                                        </tbody>
                                      </table>

                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col s12 m12 l6">
                            <a class=" button-padding waves-effect waves-light btn-large purple darken-1 btn-block" href="/product/123"><i class="material-icons right">playlist_add</i>Add To Wish List</a>
                      </div>
                      <div class="col s12 m12 l6">
                            <a class=" button-padding waves-effect waves-light btn-large purple darken-1 btn-block" href="/product/123"><i class="material-icons right">add_shopping_cart</i>Add To Cart</a>
                      </div>
                    </div>
              
            </div>
          </div>
          <div class="row">
              <div class="col l12 m12 s12">
                                <MultiProductWidget widgetName="Similar Items"/>
              </div>            
          </div>
          <br/>
        </div>

      </React.Fragment>
    );
  }
}

export default Product