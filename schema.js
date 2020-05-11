type Book {
    title: String
    author: Author
  }
  
  type Author {
    name: String
    books: [Book]
  }

  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }