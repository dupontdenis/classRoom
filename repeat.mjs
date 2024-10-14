import { displayStudents } from "./studentDisplay.mjs";

export function setupRepeat(students) {
  document.getElementById("filter-repeat").addEventListener("click", repeat);

  function repeat() {
    const filteredStudents = students.filter((student) => {
      const avgMark =
        student.marks.reduce((sum, mark) => sum + mark, 0) /
        student.marks.length;
      return avgMark < 10;
    });

    // Add a special class to students with mark < 10
    const studentsWithRepeat = students.map((student) => {
      if (filteredStudents.includes(student)) {
        return { ...student, mark: true };
      }
      return student;
    });

    displayStudents(studentsWithRepeat);
  }
}
