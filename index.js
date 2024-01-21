let addTodo = document.querySelector(".addTodo");
var inputTodo = document.getElementById("inputTodo");

document.getElementById("myBtn").addEventListener("click", function () {
  if (inputTodo.value == "") {
    alert("Please Enter a Task");
  } else {
    let newELement = document.createElement("ul");
    newELement.innerHTML = `${inputTodo.value}<span class="material-symbols-outlined">
    close
    </span>`;
    addTodo.appendChild(newELement);
    inputTodo.value = "";
    newELement
      .querySelector(".material-symbols-outlined")
      .addEventListener("click", remove);
    function remove() {
      newELement.remove();
    }
  }
});
inputTodo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
