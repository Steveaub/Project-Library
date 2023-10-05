// Function to add a new book from user input into an array.
// Function to loop through array, displaying each book in a table or card.
// "NEW BOOK" button to open a form for book details: author, title, pages, read status, etc.
// Button on each book display to remove the book.
// Associate DOM elements with book objects via data-attribute for array index.
// Button on each book display to toggle read status.
// Create function on Book prototype to toggle a book's read status.

const myLibrary = [];
console.log(myLibrary);


function myLibraryDisplay (){

    let bookContainer = document.getElementById('book-container');
    bookContainer.textContent = ""; 

    for( let i in myLibrary ) {
        let bookDisplay = document.createElement("div")
        let book = myLibrary[i]
        
        bookDisplay.textContent = `${book.title} by ${book.author}, ${book.pages} pages. ${book.readStatus()}`;
        bookContainer.appendChild(bookDisplay);
    }

   
}

function Book(title, author, pages, read) {
  this.title = title;

  this.author = author;

  this.pages = pages;
  this.read = read;
}

Book.prototype.readStatus = function () {
  if (this.read === false) {
    return "I have not read this book.";
  } else {
    return "I have  read this book.";
  }
};

let button = document.getElementById("new-book");
button.addEventListener("click", function(){
    myLibraryDisplay ()
})

function toggleForm() {
    
    let form = document.getElementById('hiddenForm');
    if (form.style.display === 'none') {
        form.style.display = 'block'; 
    } else {
        form.style.display = 'none'; 
    }
}


let form = document.getElementById('hiddenForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form Submitted!")
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value; 
    let read = document.getElementById('myCheckbox').checked;
    
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    console.log(myLibrary);
    myLibraryDisplay(); 
    
    form.reset(); 
    form.style.display = 'none'; 
});




const firstBook = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "jk rowling",
  320,
  false
);
myLibrary.push(firstBook);



const secondBook = new Book("Dune", "Frank Herbert", 896, false);
myLibrary.push(secondBook);


const thirdBook = new Book(" Foundation", "Isaac Asimov", 255, false);

myLibrary.push(thirdBook);

console.log(firstBook);
console.log(secondBook);
console.log(thirdBook);
