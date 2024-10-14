import students from "./students.mjs";
import { displayStudents } from "./studentDisplay.mjs";

document
  .getElementById("filter-low-marks")
  .addEventListener("click", filterStudents);

function filterStudents() {
  const filteredStudents = students.filter((student) =>
    student.marks.some((mark) => mark < 5)
  );

  // Add a special class to students with low marks
  const studentsWithClass = students.map((student) => {
    if (filteredStudents.includes(student)) {
      return { ...student, mark: true };
    }
    return student;
  });

  displayStudents(studentsWithClass);
}
