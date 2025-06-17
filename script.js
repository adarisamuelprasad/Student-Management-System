function addStudent() {
  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();
  const email = document.getElementById('email').value.trim();
  const grade = document.getElementById('grade').value.trim();

  if (!name || !age || !email || !grade) {
    alert("Please fill all fields.");
    return;
  }

  const tableBody = document.getElementById('studentTableBody');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${age}</td>
    <td>${email}</td>
    <td>${grade}</td>
    <td>
      <button class="edit-btn" onclick="editStudent(this)">Edit</button>
      <button class="delete-btn" onclick="deleteStudent(this)">Delete</button>
    </td>
  `;

  tableBody.appendChild(row);

  // Clear inputs
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('email').value = '';
  document.getElementById('grade').value = '';
}

function deleteStudent(button) {
  if (confirm("Are you sure you want to delete this student?")) {
    button.parentElement.parentElement.remove();
  }
}

function editStudent(button) {
  const row = button.parentElement.parentElement;
  const cells = row.querySelectorAll('td');

  const name = prompt("Edit name:", cells[0].textContent);
  const age = prompt("Edit age:", cells[1].textContent);
  const email = prompt("Edit email:", cells[2].textContent);
  const grade = prompt("Edit grade:", cells[3].textContent);

  if (name && age && email && grade) {
    cells[0].textContent = name;
    cells[1].textContent = age;
    cells[2].textContent = email;
    cells[3].textContent = grade;
  }
}
