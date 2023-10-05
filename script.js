// Function to add a new book from user input into an array.
// Function to loop through array, displaying each book in a table or card.
// "NEW BOOK" button to open a form for book details: author, title, pages, read status, etc.
// Button on each book display to remove the book.
// Associate DOM elements with book objects via data-attribute for array index.
// Button on each book display to toggle read status.
// Create function on Book prototype to toggle a book's read status.







const myLibrary = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", pages: 309 },
    { title: "Percy Jackson & The Olympians: The Lightning Thief", author: "Rick Riordan", pages: 377 },
];


function addBookToLibrary(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
}

function getInputValues() {
   
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    addBookToLibrary(title, author, pages)
}


function displayLibrary() {
    
    let libraryContainer = document.getElementById('library-container'); 
    
    for (let i in myLibrary) {
        const book = myLibrary[i];
        let showBook = document.createElement('div'); 
        showBook.textContent = `${book.title} by ${book.author}, ${book.pages} pages`;
        libraryContainer.appendChild(showBook);
    }
}






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
  
  
  
  
  
  
  
  
  