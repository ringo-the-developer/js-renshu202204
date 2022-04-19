let h1_text = document.getElementById("h1-text");
console.log(h1_text);

console.log(document.getElementById('test').textContent);

// 定義
const form = document.getElementById("form");
const input = document.getElementById("input")
const ul = document.getElementById("ul")

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
  todos.forEach((todo) => {
    add(todo);
  });
}

form.addEventListener("submit", function(e){
  e.preventDefault();
  let todoText = input.value;

  console.log(todoText);

  // add todotext into ul 
  const li = document.createElement("li");

  li.innerText = todoText;

  ul.appendChild(li);

  input.value = ""
})

function saveData(){
  const lists = document.querySelectorAll("li");
  const todos = [];

  lists.forEach((li) => {
    todos.push({
      text: li.innerText
    })
  })

  localStorage.setItem("todos", JSON.stringify(todos));
}


