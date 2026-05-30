import { supabase } from "./supabase.js";

const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  await supabase.from("transactions").insert([
    {
      type,
      description,
      amount: Number(amount)
    }
  ]);

  form.reset();
  loadData();
});

async function loadData() {
  const { data } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false });

  list.innerHTML = "";

  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.type} - ${item.description} - $${item.amount}`;
    list.appendChild(li);
  });
}

loadData();