document.addEventListener('DOMContentLoaded', (event) => {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    Book.prototype.readStatus = function() {
        if (this.read === false) {
            return "I have not read this book.";
        } else {
            return "I have read this book.";
        }
    };

    function myLibraryDisplay() {
        const bookContainer = document.getElementById("book-container");
        bookContainer.textContent = "";

        for (let i in myLibrary) {
            const bookDisplay = document.createElement("div");
            const book = myLibrary[i];

            bookDisplay.textContent = `${book.title} by ${book.author}, ${book.pages} pages. ${book.readStatus()}`;
            bookContainer.appendChild(bookDisplay);
        }
    }

    const form = document.getElementById("hiddenForm");
    form.style.display = "none"; // Hide form on page load

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const read = document.getElementById("myCheckbox").checked;

        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);

        myLibraryDisplay();
        form.reset();
        form.style.display = "none"; // Hide form after submission
    });

    document.getElementById("new-book").addEventListener("click", function() {
        if (form.style.display === "none") {
            form.style.display = "block"; // Show form
        } else {
            form.style.display = "none"; // Hide form
        }
    });

    // Sample books
    const firstBook = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 320, false);
    myLibrary.push(firstBook);

    const secondBook = new Book("Dune", "Frank Herbert", 896, false);
    myLibrary.push(secondBook);

    const thirdBook = new Book("Foundation", "Isaac Asimov", 255, false);
    myLibrary.push(thirdBook);

    myLibraryDisplay(); // Display initial books
});
