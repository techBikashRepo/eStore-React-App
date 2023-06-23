import { useSelector } from "react-redux";
import "./_products.scss";
import productSlice from "../../store/slices/productSlice";

const Products = () => {
  const productData = useSelector(productSlice.getInitialState);

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div className="mx-3 p-3 product-card">
            <div className="product-image-container">
              <img src={require("../../assets/images/shop/" + product.img)} />
            </div>
            <div className="product-info">
              <h5>
                {" "}
                <a href="#">{product.pName}</a>{" "}
              </h5>
              <p className="product-price">
                {" "}
                <i class="fa fa-inr"></i> {product.price}{" "}
              </p>
            </div>
            <div className="product-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
