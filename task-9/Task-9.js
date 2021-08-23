const fs = require("fs");

// Creating and writing in a file
fs.writeFile(
  "./initial.txt",
  "This is a new file.",
  (err) => {
    console.log("File Created.");
  }
);

// Reading data
fs.readFile("./initial.txt", "UTF-8", (err, data) => {
  console.log("Reading done.");
  console.log(data);
});

// Updation
fs.appendFile("./initial.txt", " Appended text.", (err) => {
  console.log("Appended");
});

// Renaming
fs.rename("./initial.txt", "./task/initial_new.txt", (err) => {
  console.log("Renamed");
});

// Deleting file
fs.unlink("./initial_new.txt", (err) => {
  console.log("Deleted");
});