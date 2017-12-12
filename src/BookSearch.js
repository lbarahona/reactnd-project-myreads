import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookSearch extends Component {
  state = {
    books: [],
    query: ''
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired
  }

  handleChange = (event) => {
    var value = event.target.value
    this.setState({query: value.trim()})
    this.searchBooks(value)
  }

  updateBookShelf = (books) => {
    let allBooks = this.props.myBooks
    for (let book of books) {
      book.shelf = "none"
    }

    for (let book of books) {
      for (let b of allBooks) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  }

  searchBooks = (val) => {
    if (val.length !== 0) {
      BooksAPI.search(val, 10).then((books) => {
        if (books.length) {
          books = books.filter((book) => (book.imageLinks))
          books = this.updateBookShelf(books)
          this.setState( {books: books} )
        }
      })
    } else {
      this.setState({books: [], query: ''})
    }
  }

  alertMsg = (book, shelf) => {
    alert('Book ' + book.title + ' added to ' + shelf + ' shelf')
  }

  addBook = (book, shelf) => {
    this.props.onChange(book, shelf)
    this.alertMsg(book, shelf)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query.length > 0 && this.state.books.map((book, index) => (
              <Book 
                book={book} 
                key={index} 
                onUpdate={(shelf) => {
                  this.addBook(book, shelf)
              }}/>)
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
