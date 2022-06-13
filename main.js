const input = document.querySelector('input');
const list = document.querySelector("ul");
const button = document.querySelector("button");
const addForm = document.getElementById("addForm");
const page = document.querySelector("#page");
const parentButton = document.querySelector("#parentButton");
const parentSubmitButton = document.querySelector("#parentSubmitButton");
button.addEventListener('click', () => {

  const newBoook = input.value;
  input.value = '';
  const bookList = document.createElement("li");
  bookList.textContent = newBoook
  list.appendChild(bookList)
});


addForm.addEventListener("click", () => {
  const bookForm = document.createElement("form");
  bookForm.setAttribute("id", "bookForm");
  let label1 = document.createElement("label");
  label1.textContent = "Book Name:";
  let input1 = document.createElement("input");
  let label2 = document.createElement("label");
  label2.textContent = "Year:";
  let input2 = document.createElement("input");
label1.appendChild(input1);
label2.appendChild(input2);
  
  bookForm.append(label1, label2);
  page.appendChild(bookForm);
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