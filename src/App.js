import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBook from './ListBook'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  updateBookDetails = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBook 
            books={this.state.books} 
            onChange={this.updateBookDetails}/>
            )}
        />
        <Route exact path="/search" render={({history}) => (
          <BookSearch 
            onChange={this.updateBookDetails} 
            myBooks={this.state.books}/>
            )}
        />
      </div>
    )
  }
}

export default BooksApp
