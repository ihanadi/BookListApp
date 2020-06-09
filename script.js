const form = document.querySelector('#book-form');
const bookTitle = document.querySelector('#title');
const bookAuther = document.querySelector('#auther');
const bookIsbn = document.querySelector('#isbn');
const bookList = document.querySelector('#book-list');
const clearAll = document.querySelector('#clear-all')

loadEventListner()

function loadEventListner(){
    // Add Book to table
    form.addEventListener('submit',addBook);
    // Remove book element from table
    bookList.addEventListener('click', removeBook);
    // Clear All Books
    clearAll.addEventListener('click', clearAllBooks);

}
// Clear All Books
function clearAllBooks(){
    // bookList.innerHTML = ""
    while(bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
    }
}

// Remove book element from table
function removeBook(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

// Add Book to table
function addBook(e){
    if(bookTitle.value === '' || bookAuther.value === '' || bookIsbn.value === ''){
        alert('Please fill in all fields');
    }else{
     // create tr element
    const tr = document.createElement('tr');

    // Create td elements
    tr.innerHTML = `
        <td>${bookTitle.value}</td>
        <td>${bookAuther.value}</td>
        <td>${bookIsbn.value}</td>
        <td><a class='text-danger delete-item'><i class='far fa-trash-alt'></i></a></td>
    `;

    bookList.appendChild(tr);

    bookTitle.value = '';
    bookAuther.value = '';
    bookIsbn.value = '';
        }
    

    e.preventDefault();
}