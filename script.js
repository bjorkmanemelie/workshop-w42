//Exercise 4: creating a list

const five = ["druckit kaffe", "coding", "workshop", "break", "practice"]; //five is variabel for forEach loop.
const ul = document.createElement("ul");

const colors = ["#1e3a8a", "#059669", "#f97316", "#2563eb", "#475569"];

//looping through every item and creating li-element
five.forEach((list, index) => {
  const li = document.createElement("li");
  li.textContent = list;
  li.style.color = colors[index];
  ul.appendChild(li);
});

document.body.appendChild(ul);
