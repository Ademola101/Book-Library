const input = document.querySelector('input');
const list = document.querySelector("ul");
const listItem = document.querySelector("li");
const listText = document.querySelector("span");
const button = document.querySelector("button");
const addForm = document.getElementById("addForm");
const page = document.querySelector("#page");
const parentButton = document.querySelector("#parentButton");
const parentSubmitButton = document.querySelector("#parentSubmitButton");
let myLibrary = [];


addForm.addEventListener("click", () => {
  const bookForm = document.createElement("form");
  bookForm.setAttribute("id", "bookForm");
  bookForm.setAttribute("class", "bookForm");
  let label1 = document.createElement("label");
  label1.textContent = "Book Name:";
  let input1 = document.createElement("input");
  let label2 = document.createElement("label");
  label2.textContent = "Year:";
  let input2 = document.createElement("input");
  let submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
label1.appendChild(input1);
label2.appendChild(input2);
  
  bookForm.append(label1, label2, submitButton);
  parentButton.removeChild(addForm);
  page.appendChild(bookForm);
  
  })


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