import { displayStudents } from "./studentDisplay.mjs";

export function setupSortButton(students) {
  document.getElementById("sort-students").addEventListener("click", () => {
    const sortedStudents = [...students]
      .map((student) => {
        const avgMark =
          student.marks.reduce((sum, mark) => sum + mark, 0) /
          student.marks.length;
        return { ...student, averageMark: avgMark.toFixed(2) };
      })
      .sort((a, b) => b.averageMark - a.averageMark); // Sort in descending order

    displayStudents(sortedStudents);
  });
}
