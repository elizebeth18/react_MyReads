import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import ShelfBooks from './ShelfBooks';
//import BooksApp from './App.js';

class SearchBook extends Component {
	
   	state = {
    	bCollections: []
    }
	
	static propsTypes = {
   		changeBookShelf: PropTypes.func.isRequired
    }
  	
	

	onSearch = (searchValue) => {
    	
      if(searchValue === ''){
      	this.setState({ bCollections: [] });
      }else {
      	let updatedCollections;
        	BooksAPI.search(searchValue,100).then((collections) => {
          		/*this.setState({ bCollections: collections });
              	updatedCollections = this.skb(collections);*/
              
              /*collections: collections.map((booK) => {
			  return booK;
			})*/
              this.setState({ bCollections: collections });
              updatedCollections = this.skb(this.state.bCollections);
              this.setState({ bCollections: updatedCollections });
              
      		});
        
       		 
        //console.log('bCollection==>'+this.state.bCollections.length);      
      }
      
      
    }

	skb = (tempBooks) => {
      
      let existShelfLen = this.props.searchBook.length;
      let existShelf = this.props.searchBook;
      
      for(let i = 0;i < existShelfLen;i++){
      
      	for(let j = 0;j < tempBooks.length;j++){
          	if(existShelf[i].id === tempBooks[j].id){
            	tempBooks[j].shelf = existShelf[i].shelf;
            }
      		//console.log('tempBooks===>'+ tempBooks[j].id +"   "+tempBooks[j].title);
      	}
      }
      
      return tempBooks;
    }

	/*componentDidMount() {
  		BooksAPI.getAll().then((bCollections) => {
    	this.setState({ bCollections })
  		});
	}*/

    render(){
  	    const { changeBookShelf } = this.props;
		
      return(
        	   <div className="app">
          		<div className="search-books">
            		<div className="search-books-bar">
              			<Link className="close-search" to={process.env.PUBLIC_URL + '/'} >Close</Link>
              			<div className="search-books-input-wrapper">
            				<input type="text"  placeholder="Search by title or author"
                			onChange={(event) => this.onSearch(event.target.value)} />
              			</div>
            		</div>
            		<div className="search-books-results">
              			<ol className="books-grid">
							{ this.state.bCollections && this.state.bCollections.map((b) => <ShelfBooks key={b.id} book={b}    changeBookShelf={b.changeBookShelf} /> )
                            }
						</ol>
            		</div>
          		</div>
			</div>
		)
	}
       
}


export default SearchBook;