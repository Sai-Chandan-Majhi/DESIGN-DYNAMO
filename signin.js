const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  fetch("", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele) => ele.email === email.value);
      if (
        comparision.email === email.value &&
        comparision.password === pass.value
      ) {
        alert("Logged in Successfully!");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparision.id));
        window.location.href = "../index.html";
      } else {
        alert("You are not registered in!");
      }
    });
});
