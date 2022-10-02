document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleForm(e.target.new_task_description.value);
    form.reset();
  });
});

function handleForm(todo) {
  let list = document.getElementById("tasks");
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");
  let span = document.createElement("span");
  span.innerHTML = "     ";
  li.innerHTML = `${todo}`;
  deleteButton.innerHTML = "X";
  li.appendChild(span);
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", handleDelete);
  list.appendChild(li);
}
function handleDelete(e) {
  e.target.parentNode.remove();
}
