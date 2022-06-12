const input = document.querySelector('input');
const list = document.querySelector("ul");
const button = document.querySelector("button");
const addForm = document.getElementById("addForm");
const page = document.querySelector("#page");
const parentButton = document.querySelector("#parentButton");
button.addEventListener('click', () => {

  const newBoook = input.value;
  input.value = '';
  const bookList = document.createElement("li");
  bookList.textContent = newBoook
  list.appendChild(bookList)
});


addForm.addEventListener("click", () => {
  console.log("Addform");
  const pageInput = document.createElement("input");
  pageInput.type = "text";
  page.appendChild(pageInput);
  parentButton.removeChild(addForm);
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