document.addEventListener('DOMContentLoaded', (event) => {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

 

    // Method to toggle read status
    Book.prototype.toggleReadStatus = function() {
        this.read = !this.read;
    };

    function myLibraryDisplay() {
        const bookContainer = document.getElementById("book-container");
        bookContainer.textContent = "";

        for (let i in myLibrary) {
            const bookDisplay = document.createElement("div");
            const book = myLibrary[i];

            bookDisplay.textContent = `${book.title} by ${book.author}, ${book.pages} pages.`;
            
            // Create delete button
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.dataset.index = i;
            deleteButton.addEventListener("click", removeBook);
            bookDisplay.appendChild(deleteButton);   

            // Create and append readButton
            const readButton = document.createElement("button");
            readButton.textContent = myLibrary[i].read ? "Read" : "Unread";
            readButton.dataset.index = i;
            readButton.addEventListener("click", toggleReadStatus);
            bookDisplay.appendChild(readButton);

            // Append bookDisplay to bookContainer
            bookContainer.appendChild(bookDisplay);
        }
    }

    function toggleReadStatus(event) {
        // Get index from data attribute of clicked read button
        const index = event.target.dataset.index;
    
        // Toggle read status of book in myLibrary array
        myLibrary[index].toggleReadStatus();
    
        // Re-render book display to reflect the changes
        myLibraryDisplay();
    }

    function removeBook(event) {
        // Get index from data attribute of clicked delete button
        const index = event.target.dataset.index;
    
        // Remove book from myLibrary array
        myLibrary.splice(index, 1);
    
        // Re-render book display
        myLibraryDisplay();
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
