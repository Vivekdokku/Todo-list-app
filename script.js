const submit_button = document.getElementById("submit-btn");

const list_container = document.getElementById("list");


// number of tasks
let number_of_tasks = 0;
const number_of_tasks_display = document.getElementById("number-of-tasks");

const entry_bar = document.getElementById("entry-form");

let delete_buttons = document.getElementsByClassName("delete-btn");


number_of_tasks_display.textContent = `there are ${number_of_tasks} pending tasks`;

entry_bar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      submit_button.click(); // Trigger the same click behavior
    }
  });

submit_button.addEventListener("click", () => {
  const inputvalue = entry_bar.value;
  entry_bar.value = "";

  //card
  number_of_tasks += 1;
  const newcard = document.createElement("div");
  newcard.className = "card";

  //card-text
  const card_text = document.createElement("div");
  card_text.className = "card-text";
  card_text.textContent = inputvalue;

  //delete-btn
  const delete_button = document.createElement("button");
  delete_button.className = "delete-btn";
  delete_button.textContent = "🗑️";
  delete_button.onclick = () => {
    delete_button.parentElement.remove();
    number_of_tasks -= 1;
    number_of_tasks_display.textContent = `there are ${number_of_tasks} pending tasks`;
  };

  //apending
  newcard.appendChild(card_text);
  newcard.appendChild(delete_button);
  list_container.appendChild(newcard);

  const number_of_tasks_display = document.getElementById("number-of-tasks");
  number_of_tasks_display.textContent = `there are ${number_of_tasks} pending tasks`;
});
