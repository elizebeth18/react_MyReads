import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBook from './SearchBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  });
}

changeBookShelf = (Book, shelf) => {
  if(Book.shelf !== shelf){
    BooksAPI.update(Book, shelf).then(() => {
      Book.shelf = shelf;
      
      
      
      let oldBooks = this.state.books.filter(book => book.id !== Book.id)
      
      this.setState( (currentState) => ({
        books: oldBooks.concat(Book)
      }));
      
      //this.history.push('/');
    });
  }
}

onSearchBook = (e) => {
	//BookAPI.search('a',20)
}
  render() {
    return (
      <div className="app">
     
       <Route exact path={process.env.PUBLIC_URL + '/'}  render={() => (
          <ListBooks 
            books={this.state.books}
            changeBookShelf={this.changeBookShelf}/>
        )}/>

		<Route  path={process.env.PUBLIC_URL + '/search'}  render={({ history }) => (
          <SearchBook
            //onSearchBook={(books) => {
              //this.createContact(contact)
              //history.push('/')
            //}}
          		searchBook={this.state.books}
          		onSearchBook={() => {
          		this.onSearchBook(this.state.books);
          		history.push('/')
        		}
			}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp