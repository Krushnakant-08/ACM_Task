document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    branch: document.getElementById("branch").value,
    year: document.getElementById("year").value
  };

  console.log("Form submitted:", data);

  document.getElementById("successMessage").style.display = "block";

  window.location.href = "thank.html";
});
