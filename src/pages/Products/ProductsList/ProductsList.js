import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import DropdownMenu from './components/DropdownMenu';
import { withRouter } from 'react-router-dom';
import './ProductsList.scss';

export class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: { content: [{}] },
      isPriceHigh: false,
      isPriceLow: false,
    };
  }

  componentDidMount() {
    fetch(`/data/productListData1.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  }

  fetchData = queryString => {
    const { isPriceHigh, isPriceLow } = this.state;
    if (queryString === '?category=ballcap') {
      fetch(`/data/productListData2.json`)
        .then(res => res.json())
        .then(data => {
          if (isPriceHigh === false && isPriceLow === false) {
          } else if (isPriceHigh === true && isPriceLow === false) {
            data.content.sort((a, b) => b.price - a.price);
          } else if (isPriceLow === true && isPriceHigh === false) {
            data.content.sort((a, b) => a.price - b.price);
          }
          this.setState({
            products: data,
          });
        });
    } else if (queryString === '?category=apparel') {
      fetch(`/data/productListData1.json`)
        .then(res => res.json())
        .then(data => {
          if (isPriceHigh === false && isPriceLow === false) {
          } else if (isPriceHigh === true && isPriceLow === false) {
            data.content.sort((a, b) => b.price - a.price);
          } else if (isPriceLow === true && isPriceHigh === false) {
            data.content.sort((a, b) => a.price - b.price);
          }
          this.setState({
            products: data,
          });
        });
    } else if (queryString === '') {
      fetch(`/data/productListData3.json`)
        .then(res => res.json())
        .then(data => {
          if (isPriceHigh === false && isPriceLow === false) {
          } else if (isPriceHigh === true && isPriceLow === false) {
            data.content.sort((a, b) => b.price - a.price);
          } else if (isPriceLow === true && isPriceHigh === false) {
            data.content.sort((a, b) => a.price - b.price);
          }
          this.setState({
            products: data,
          });
        });
    }
  };

  sortPriceHighest = () => {
    this.setState({
      isPriceHigh: true,
      isPriceLow: false,
    });
  };
  sortPriceLowest = () => {
    this.setState({
      isPriceLow: true,
      isPriceHigh: false,
    });
  };

  render() {
    const { products } = this.state;
    const { sortPriceHighest, sortPriceLowest } = this;
    const queryString = this.props.location.search;
    console.log(queryString);
    this.fetchData(queryString);

    return (
      <div className="ProductsList">
        <div className="container">
          <DropdownMenu
            productsData={products}
            outCategoryName={products.name}
            categoryId={products.categoryId}
          />
          <div>
            <button className="filterButton" onClick={sortPriceHighest}>
              높은가격순
            </button>
            <span className="buttonDivider">|</span>
            <button className="filterButton" onClick={sortPriceLowest}>
              낮은가격순
            </button>
          </div>

          <div className="productsListContainer">
            <div className="prods">
              {products.content.map(item => {
                const { id, name, price, image_url } = item;
                return (
                  <SingleProduct
                    key={id}
                    id={id}
                    productName={name}
                    productPrice={price}
                    imgURL={image_url}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductsList);
