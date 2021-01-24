import React from 'react';
import BooksComponent from '../../components/books-table/books-table.component';

import './homepage.styles.css';

const HomePage = ({booksList,handleAddToCart}) => {
    return (
        booksList.length === 0 ? (
            <div style={{textAlign:"center"}}>
              <h1 style={{marginTop:"40px"}}> Loading ... </h1>
            </div>
          ) : (
            <BooksComponent booksList={booksList} handleAddToCart={handleAddToCart} />
          )
    )
}

export default HomePage;