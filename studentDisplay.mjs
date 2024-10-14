export function displayStudents(students) {
  const studentTableElement = document.getElementById("student-table");

  if (students.length === 0) return;

  const headers = Object.keys(students[0]);

  const tableHTML = `
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          ${headers
            .map(
              (header) =>
                `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`
            )
            .join("")}
        </tr>
      </thead>
      <tbody>
        ${students
          .map(
            (student) => `
            <tr class="${student.mark ? "table-danger" : ""}">
              ${headers
                .map((header) => {
                  if (header === "averageMark") {
                    return `<td>${parseFloat(student[header]).toFixed(2)}</td>`;
                  }
                  return `<td>${
                    Array.isArray(student[header])
                      ? student[header].join(", ")
                      : student[header]
                  }</td>`;
                })
                .join("")}
            </tr>`
          )
          .join("")}
      </tbody>
    </table>
  `;

  studentTableElement.innerHTML = tableHTML;
}
