const input = document.querySelector('input');
const list = document.querySelector("ul");
const button = document.querySelector("button");


button.addEventListener('click', () => {
  
  const newBoook = input.value;
  input.value = '';
  const bookList = document.createElement("li");
  bookList.textContent = newBoook
  list.appendChild(bookList)
})
const myLibrary = [];

function Book(name,year) {
this.name = name;
this.year = year
}


let addBook = () => {
let book1 = new Book("ade", 1993);

myLibrary.push(book1)
};

addBook()
console.log(myLibrary);