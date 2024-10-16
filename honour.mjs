  import { displayStudents } from "./studentDisplay.mjs";

// Create a Map for all honours
const honoursMap = new Map([
  ["standard pass", [10, 12]],
  ["🪛  merit", [12, 14]],
  ["🚀  distinction", [14, 16]],
  ["🥷  high distinction", [16, 18]],
  ["🧙🏼‍♂️  Summa cum laude", [18, 20]],
]);

// Function to get the honour based on a mark
export function getHonour(mark) {
  console.log(mark);
  for (const [honour, range] of honoursMap) {
    if (mark >= range[0] && mark <= range[1]) {
      return honour;
    }
  }
  return "👿repeat";
}

// Example usage
const exampleMark = 12;
console.log(`The honour for mark ${exampleMark} is: ${getHonour(exampleMark)}`);

// Function to setup honour for students
export function setupHonour(students) {
  document.getElementById("honour").addEventListener("click", () => {
    const honourStudents = [...students]
      .map((student) => {
        const avgMark =
          student.marks.reduce((sum, mark) => sum + mark, 0) /
          student.marks.length;
        const honour = getHonour(avgMark);
        return { ...student, honour };
      })
      .sort((a, b) => b.honour - a.honour); // Sort in descending order

    displayStudents(honourStudents);
  });
}
