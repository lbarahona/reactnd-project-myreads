# My-Reads Project

An application that allow users to search and categorize books(none, currently reading, read, want to read).
This application was built using [React](https://reactjs.org/) as a final project Udacity's React fundamentals course, first part of the [React nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Requirements
* [NodeJS](https://nodejs.org)
* [npm](https://www.npmjs.com/get-npm)

## How to Run the App:

1. Download or clone Git repo [here](https://github.com/lbarahona/reactnd-project-myreads).
2. In a terminal window, navigate to project folder and run `npm install` to install the project dependencies.
3. Run the app by typing `npm start` in the terminal window.
4. Access the application by pointing your browser to: `localhost:3000`. 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
