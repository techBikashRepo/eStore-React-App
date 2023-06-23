import React from "react";
import "./_cat-nav.scss";
import { useSelector } from "react-redux";
import categorySlice from "../../store/slices/categorySlice";

const CatNav = () => {
  const categories = useSelector(categorySlice.getInitialState);
  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category) => {
            return (
              <li className="list-items">
                <a href="/#">{category}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CatNav;
