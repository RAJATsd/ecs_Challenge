import React from "react";

import "./filters.styles.css";

const Filters = ({filtersToApply,handleClickCheckbox}) => {
  return (
    <div className="filters">
      <div className="filters-heading">
        <h3>Filters</h3>
      </div>
      <div className="filters-container">
        <div className="filters__filter">
          <input type="checkbox" name="title" id="title" checked={filtersToApply.title} onChange = {handleClickCheckbox} />
          <label htmlFor="title">Title</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="author" id="author" checked={filtersToApply.author} onChange = {handleClickCheckbox} />
          <label htmlFor="author">Author</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="rating" id="rating" checked={filtersToApply.rating} onChange = {handleClickCheckbox} />
          <label htmlFor="rating">Rating</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="ISBN" id="ISBN" checked={filtersToApply.ISBN} onChange = {handleClickCheckbox} />
          <label htmlFor="ISBN">ISBN</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="language" id="language" checked={filtersToApply.language} onChange = {handleClickCheckbox} />
          <label htmlFor="language">Language</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="rating_count" id="rating_count" checked={filtersToApply.rating_count} onChange = {handleClickCheckbox} />
          <label htmlFor="rating_count">Rating Count</label>
        </div>
        <div className="filters__filter">
          <input type="checkbox" name="price" id="price" checked={filtersToApply.price} onChange = {handleClickCheckbox} />
          <label htmlFor="price">Price</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
