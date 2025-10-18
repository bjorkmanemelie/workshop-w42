const btn1 = document.createElement("button");
btn1.textContent = "Ändra bg färg";

const btn2 = document.createElement("button");
btn2.textContent = "Ändra textfärg";

const btn3 = document.createElement("button");
btn3.textContent = "Ändra innehåll";

const p = document.createElement("p");
p.textContent = "Paragraf med text";

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);
document.body.appendChild(p);

btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f1f5f9";
});

btn2.addEventListener("click", () => {
  p.style.color = "#0f172a";
});

btn3.addEventListener("click", () => {
  p.textContent = "Känner nu mig säkrare på att skapa element i js";
});
