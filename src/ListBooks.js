import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShelfBooks from './ShelfBooks';

class ListBooks extends Component {
  static propstypes = {
   books: PropTypes.array.isRequired,
   changeBookShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeBookShelf } = this.props;    
    
    return (
      	<div className="list-books">
            <div className="list-books-title">
              	<h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                	<h2 className="bookshelf-title">Currently Reading</h2>
                	<div className="bookshelf-books">
                      <ol className="books-grid">
                        {books.filter(book => book.shelf === 'currentlyReading').map((book) =>
                          <ShelfBooks
                              key={book.id}
                              book={book}
                              shelf={book.shelf}
                              changeBookShelf={changeBookShelf}
                              />
                          )}
					  </ol>
                	</div>
                </div>
                <div className="bookshelf">
                	<h2 className="bookshelf-title">Want to Read </h2>
                		<div className="bookshelf-books">
                			<ol className="books-grid">
                				{books.filter(book => book.shelf === 'wantToRead').map((book) =>
                                   <ShelfBooks 
                                   	key={book.id}
                                  	book={book}
                                  	shelf={book.shelf}
                                  	changeBookShelf={changeBookShelf}
                                  />
                				)}
                			</ol>
                		</div>
				</div>
                <div className="bookshelf">
                	<h2 className="bookshelf-title">Read </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      	{books.filter(book => book.shelf === 'read').map((book) =>
                       		<ShelfBooks 
                       			key={book.id}
                      			book={book}
                      			shelf={book.shelf}
                      			changeBookShelf={changeBookShelf}
                      		/>
                      	)}
                      </ol>
                    </div>
				</div>
              </div>
      	    </div>
            <div className="open-search">
              <Link to={process.env.PUBLIC_URL + '/search'} className="add-book">Add a book</Link>
            </div>
          </div>
      )
  }
}

export default ListBooks;