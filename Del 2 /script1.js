const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;

  li.addEventListener("dblclick", (e) => {
    e.target.remove();
  });
  ul.appendChild(li);
}

const btn = document.createElement("button");
btn.textContent = "Lägg till nytt element";

let itemCount = 6;

btn.addEventListener("dblclick", () => {
  const newLi = document.createElement("li");
  newLi.textContent = `Item ${itemCount}`;

  newLi.addEventListener("dblclick", (e) => {
    e.target.remove();
  });
  ul.appendChild(newLi);
  itemCount++;
});

document.body.appendChild(ul);
document.body.appendChild(btn);
