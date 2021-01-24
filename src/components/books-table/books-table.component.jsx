import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import Rating from '@material-ui/lab/Rating'

import FiltersComponent from "../filters/filters.component";
import "./books-table.styles.css";

const BooksTable = ({ booksList, handleAddToCart }) => {
  const [filteredList, setFilteredList] = useState(booksList);
  const [filtersToApply, setFiltersToApply] = useState({
    title: true,
    author: true,
    rating: true,
    ISBN: true,
    language: true,
    rating_count: true,
    price: true,
  });

  const handleClickCheckbox = (event) => {
    const { name } = event.target;
    setFiltersToApply({ ...filtersToApply, [name]: !filtersToApply[name] });
  };

  const filterTable = (event) => {
    const search = event.target.value;
    if (search === "") {
      return setFilteredList(booksList);
    }
    return setFilteredList(
      booksList.filter((ele) => {
        if (
          ele.title.toString().toLowerCase().includes(search.toLowerCase()) ||
          ele.authors.toString().toLowerCase().includes(search.toLowerCase())
        ) {
          return ele;
        }
      })
    );
  };
  return (
    <div className="books-table">
      <div className="table-filters">
        <FiltersComponent
          filtersToApply={filtersToApply}
          handleClickCheckbox={handleClickCheckbox}
        />
      </div>
      <div className="table-content">
        <FormControl>
          <InputLabel htmlFor="search">Search With Title Or Author</InputLabel>
          <Input
            id="search"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onKeyPress={filterTable}
          />
        </FormControl>
        <table className="main-table">
          <tr className="main-table__headings">
            {filtersToApply.title ? (
              <th className="main-table__headings__title">Title</th>
            ) : null}
            {filtersToApply.author ? (
              <th className="main-table__headings__author">Authors</th>
            ) : null}
            {filtersToApply.rating ? (
              <th className="main-table__headings__rating">Rating</th>
            ) : null}
            {filtersToApply.ISBN ? (
              <th className="main-table__headings__isbn">ISBN</th>
            ) : null}
            {filtersToApply.language ? (
              <th className="main-table__headings__language">Language</th>
            ) : null}
            {filtersToApply.rating_count ? (
              <th className="main-table__headings__rating-count">
                Rating Count
              </th>
            ) : null}
            {filtersToApply.price ? (
              <th className="main-table__headings__price">Price</th>
            ) : null}
            <th>Nothing</th>
          </tr>
          {filteredList.map((book, i) => (
            <tr
              key={book.bookID}
              className={`main-table__row ${i % 2 === 0 ? "" : "even-row"}`}
            >
              {filtersToApply.title ? (
                <td className="main-table__row__title">{book.title}</td>
              ) : null}
              {filtersToApply.author ? (
                <td className="main-table__row__authors">{book.authors}</td>
              ) : null}
              {filtersToApply.rating ? (
                <td className="main-table__row__rating">
                  <Rating name="read-only" value={book.average_rating} readOnly />
                </td>
              ) : null}
              {filtersToApply.ISBN ? (
                <td className="main-table__row__isbn">{book.isbn}</td>
              ) : null}
              {filtersToApply.language? <td className="main-table__row__language">
                {book.language_code}
              </td>:null}
              {filtersToApply.rating_count ? <td className="main-table__row__count">{book.ratings_count}</td>:null}
              {filtersToApply.price ? <td className="main-table__row__price">{book.price}</td>:null}
              <td className="main-table__row__add">
                <button onClick={() => handleAddToCart(book)}>
                  Add To Cart
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BooksTable;
