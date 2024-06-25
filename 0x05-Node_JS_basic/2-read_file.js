const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path);
    const rows = data.toString().split("\n");
    const students = new Map();

    console.log(`Number of students: ${rows.length - 1}`);
    rows.slice(1).forEach((row) => {
      let fields = row.split(","),
        key = fields[fields.length - 1];

      if (!students.has(key)) {
        students.set(key, []);
      }

      students.get(key).push(fields[0]);
    });
    students.forEach((value, key) => {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ", "
        )}`
      );
    });
  } catch (error) {
    throw new Error("Cannot load the database" + error);
  }
}

module.exports = countStudents;
