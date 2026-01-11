async function addUser() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
    console.log("add");
  await fetch('/api/users'), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, weight })
  });

  alert("User Saved");
}

async function getUsers() {
  console.log("Get Script");
  const res = await fetch('/api/users');
  const users = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  users.forEach(u => {
    const li = document.createElement("li");
    li.innerText = `${u.name} - ${u.age} - ${u.weight}`;
    list.appendChild(li);
  });
}
