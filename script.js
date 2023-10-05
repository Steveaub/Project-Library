// Function to add a new book from user input into an array.
// Function to loop through array, displaying each book in a table or card.
// "NEW BOOK" button to open a form for book details: author, title, pages, read status, etc.
// Button on each book display to remove the book.
// Associate DOM elements with book objects via data-attribute for array index.
// Button on each book display to toggle read status.
// Create function on Book prototype to toggle a book's read status.







const myLibrary = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
    { title: "Percy Jackson & The Olympians: The Lightning Thief", author: "Rick Riordan" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Eragon", author: "Christopher Paolini" },
    { title: "His Dark Materials: The Golden Compass", author: "Philip Pullman" },
    { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    { title: "Shadow and Bone", author: "Leigh Bardugo" }
];

    function Book(title, author, pages) {
    this.title = title;
  
    this.author = author;
  
    this.pages = pages;
  
    this.status = function read() {
      return console.log(
        "I have read " +
          this.title +
          " " +
          "by" +
          " " +
          this.author +
          " with " +
          this.pages +
          " pages" +
          "."
      );
    };
    this.statusNot = function Not() {
      return console.log(
        "I have not read " +
          this.title +
          " by " +
          this.author +
          " with " +
          this.pages +
          " pages" +
          "."
      );
    };
  }
  
  const firstBook = new Book("Harry Potter", "jk rowling", 800);
  const secondBook = new Book("Dune", "Frank Herbert", 700);
  
  firstBook.status();
  firstBook.statusNot();
  
  secondBook.status();
  secondBook.statusNot();
  
  
  
  
  
  
  
  
  