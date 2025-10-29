let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
	let deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	deleteBtn.classList.add("delete-btn");
	let taskText = taskInput.value;
	taskInput.value = "";

	if (taskText == "") {
		alert("Please enter a task!");
		return;
	}
	if (taskText.length > 37) {
		alert("Task cannot be more than 37 characters!");
		return;
	}

	let li = document.createElement("li");
	li.innerText = taskText;

	li.addEventListener("click", () => {
		li.classList.toggle("completed");
	});
	// delete button removes this list item
	deleteBtn.addEventListener("click", () => {
		if (li.parentNode) {
			li.parentNode.removeChild(li);
		}
	});

	li.appendChild(deleteBtn);
	taskList.appendChild(li);
});