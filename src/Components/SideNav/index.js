import React from "react";
import "./_side-nav.scss";
import { useSelector } from "react-redux";
import accordionCatSlice from "../../store/slices/accordionCatSlice";

const SideNav = () => {
  const accordionData = useSelector(accordionCatSlice.getInitialState);
  return (
    <div className="side-nav">
      <div className="section-title">
        <h4>Category</h4>
      </div>
      <div className="accordion">
        {accordionData.map((accordionCategory, index) => {
          return (
            <div className="accordion-item individual-category">
              <div className="accordion-header">
                <div className="">
                  <button
                    className="accordion-button"
                    data-bs-target={`#accordion-heading-${index}`}
                    data-bs-toggle="collapse"
                  >
                    <div className="category-title">
                      <a href="#/">{accordionCategory.category}</a>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={`accordion-heading-${index}`}
                >
                  <div className="accordion-body">
                    <ul>
                      {accordionCategory.items.map((item) => {
                        return (
                          <li className="sub-items">
                            <a href="/#">{item}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
