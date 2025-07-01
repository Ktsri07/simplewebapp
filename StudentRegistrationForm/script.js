const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const searchInput = document.getElementById("search");
const successMsg = document.getElementById("successMsg");

let students = [];

studentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const email = document.getElementById("email").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const year = document.getElementById("year").value;

  if (name && roll && email && branch && year) {
    students.push({ name, roll, email, branch, year });
    studentForm.reset();

    // Show success message
    successMsg.classList.remove("hidden");
    setTimeout(() => successMsg.classList.add("hidden"), 3000);

    // Hide list until user searches
    studentList.innerHTML = "";
  }
});

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(query)
  );

  if (query === "") {
    studentList.innerHTML = "";
  } else {
    displayStudents(filtered);
  }
});

function displayStudents(list) {
  studentList.innerHTML = "";

  if (list.length === 0) {
    studentList.innerHTML = "<li>No student found.</li>";
    return;
  }

  list.forEach((student, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${index + 1}. <strong>${student.name}</strong><br/>
      Roll: ${student.roll}<br/>
      Email: ${student.email}<br/>
      Branch: ${student.branch}, Year: ${student.year}
    `;
    studentList.appendChild(li);
  });
}
