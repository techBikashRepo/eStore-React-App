import React, { useEffect } from "react";
import "./_side-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import accordionCatSlice from "../../Redux/Accordion/accordionCatSlice/accordionCatSlice";
import { getCategories } from "../../Redux/Category/actions";

const SideNav = () => {
  const accordionData = useSelector(
    (state) => state.categoryReducer.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="side-nav">
      <div className="section-title">
        <h4>Category</h4>
      </div>
      <div className="accordion">
        {accordionData.map((accordionCategory, key) => {
          if (accordionCategory.parent_category_id === null) {
            return (
              <div className="accordion-item individual-category">
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-target={"#collapse" + key}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={"collapse" + key}
                >
                  <div className="accordion-body">
                    <ul>
                      {accordionData.map((subCategory) => {
                        if (
                          accordionCategory.id ===
                          subCategory.parent_category_id
                        ) {
                          return (
                            <li className="sub-items">
                              {" "}
                              <a href="#">{subCategory.category}</a>{" "}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SideNav;
