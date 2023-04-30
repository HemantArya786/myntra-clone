import React from "react";
import "./Category.css";
import Card from "./Cards";
import { IoIosArrowDown } from "react-icons/io";
import NameAndCheckbox from "./NameAndcheckbox";
import productData from "../Data/ProductData";

function Category({ categoryName, numberCount }) {
  return (
    <main className="container">
      <section className="filter-top">
        <div className="box-one">
          <h5>routes</h5>

          <div className="box-one-product-name">
            <h6 className="box-one-product-name-one">
              Category search name {categoryName}
            </h6>
            <p className="box-one-product-name-count">
              - number of count{numberCount}
            </p>
          </div>
          <h4>FILTERS</h4>
        </div>
        <div className="box-three">
          <h5 className="filter-items-names">CATEGORIES</h5>

          <NameAndCheckbox title="Product Name" count="1930" />
          {productData.map((cat) => (
            <NameAndCheckbox title={cat.title} count={0} />
          ))}
        </div>
        <div className="box-three">
          <h5 className="filter-items-names">BRANDS</h5>
          <NameAndCheckbox title="Nike" count="1100" />

          {productData.map((brand) => (
            <NameAndCheckbox title={brand.brand} count={0} />
          ))}
        </div>
        <div className="box-three">
          <h5 className="filter-items-names">PRICE</h5>
          <NameAndCheckbox title="Rs.1000 to Rs.2000" count="100" />
          <NameAndCheckbox title="Rs.1000 to Rs.2000" count="100" />
          <NameAndCheckbox title="Rs.1000 to Rs.2000" count="100" />
          <NameAndCheckbox title="Rs.1000 to Rs.2000" count="100" />
          <NameAndCheckbox title="Rs.1000 to Rs.2000" count="100" />
        </div>
      </section>

      <section className="category-top">
        <div className="category-top-top-box">
          <div className="cat-box-one">
            <div>
              <button className="cat-box-button">
                Bundles <IoIosArrowDown />
              </button>
            </div>
            <div>
              <button className="cat-box-button">
                country of origin <IoIosArrowDown />
              </button>
            </div>
            <div>
              <button className="cat-box-button">
                size <IoIosArrowDown />
              </button>
            </div>
          </div>

          <div>
            <button className="cat-box-button-two">
              <div className="cat-box-button-inner-items">
                <p className="cat-box-button-two-nameone">Sort by :</p>
                <p className="cat-box-button-two-nametwo">Recommeding </p>
              </div>

              <div>
                <p>
                  <IoIosArrowDown />
                </p>
              </div>
            </button>
            <div className="cat-box-button-two-dropdown">
              <p>heloo</p>
              <p>heloo</p>
              <p>heloo</p>
              <p>heloo</p>
            </div>
          </div>
        </div>
        <div className="cat-box-two">
          {productData.map((product) => (
            <Card
              Title={product.title}
              discr={product.discr}
              price={product.price}
              sizes={product.size}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Category;
