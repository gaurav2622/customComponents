import React, { useState } from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <div className="product-list">
        <div className="d-flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="product-img">
                <img
                  src={product.img}
                  className="img-fluid"
                  alt={product.title}
                  title={product.title}
                />
              </div>
              <div className="product-title">
                <div className="d-flex align-items-center justify-content-between">
                  <h4>{product.name}</h4>
                  <span className="item-price">$ {product.price}</span>
                </div>
              </div>
              <div className="product-desc">
                <p>{product.desc}</p>
              </div>
              <div className="add-to-cart">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Shop = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      img: "https://picsum.photos/400/200",
      id: 1,
      name: "Product 1",
      title: "Product 1",
      price: 10,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: "https://picsum.photos/400/200",
      id: 2,
      name: "Product 2",
      title: "Product 2",
      price: 20,
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartIemCount = cart.length;

  return (
    <div>
      <div className="shop-wrapper">
        <div className="shop-header">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="shop-title">Shopping Cart</h4>
            </div>
            <div>
              <ul className="list-inline mb-0 manage-cart">
                <li class="list-inline-item position-relative">
                  <i className="bi bi-cart"></i>
                  <span className="item-count">{cartIemCount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shop-body">
          <ProductList products={products} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
