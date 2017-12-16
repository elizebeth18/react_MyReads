import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class ShelfBooks extends Component {
  	static propstypes = {
   		changeBookShelf: PropTypes.func.isRequired
  	}
  
	render(){
      	const{ book,changeBookShelf } = this.props;
		const cover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : '';

    	return(
          <li>
          	<div className="book">
          		<div className="book-top">
          			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
						<div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(event) => changeBookShelf(book,event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors}</div>
			</div>
          </li>
        )
    }
}


export default ShelfBooks;