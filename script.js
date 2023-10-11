document.addEventListener('DOMContentLoaded', (event) => {
    const myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

 

    Book.prototype.toggleReadStatus = function() {
        this.read = !this.read;
    };

    function myLibraryDisplay() {
        const bookContainer = document.getElementById("book-container");
        bookContainer.textContent = "";

        for (let i in myLibrary) {
            const bookDisplay = document.createElement("div");
            bookDisplay.className = "book-card";
            const book = myLibrary[i];

            bookDisplay.textContent = `${book.title} by ${book.author}, ${book.pages} pages.`;
            
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";
            bookDisplay.appendChild(buttonContainer);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.dataset.index = i;
            deleteButton.className = "delete-button";
            deleteButton.addEventListener("click", removeBook);
            buttonContainer.appendChild(deleteButton); ;   

            const readButton = document.createElement("button");
            readButton.textContent = myLibrary[i].read ? "Read" : "Unread";
            readButton.dataset.index = i;
            readButton.className = myLibrary[i].read ? "read-button" : "unread-button";
            readButton.addEventListener("click", toggleReadStatus);
            buttonContainer.appendChild(readButton);;

           
            bookContainer.appendChild(bookDisplay);
        }
    }

    function toggleReadStatus(event) {
        const index = event.target.dataset.index;
    
        myLibrary[index].toggleReadStatus();
    
        myLibraryDisplay();
    }

    function removeBook(event) {
        const index = event.target.dataset.index;
    
        myLibrary.splice(index, 1);
    
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
        form.style.display = "none"; 
        document.getElementById("overlay").style.display = "none";
    });

    document.getElementById("new-book").addEventListener("click", function() {
        if (form.style.display === "none") {
            form.style.display = "block"; 
            document.getElementById("overlay").style.display = "block"; 
        } else {
            form.style.display = "none"; 
            document.getElementById("overlay").style.display = "block"; 
        }
    });

    document.getElementById("overlay").addEventListener("click", function() {
        form.style.display = "none";
        document.getElementById("overlay").style.display = "none";
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
