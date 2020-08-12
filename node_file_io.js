var fs = require("fs");
class Visitor {
  constructor(
    full_name,
    age,
    dateOfVisit,
    timeOfVisit,
    comments,
    assitantName
  ) {
    this.full_name = full_name;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.comments = comments;
    this.assitantName = assitantName;
    this.timeOfVisit = timeOfVisit;
  }
  save() {
    let jsObj = new Visitor(
        this.full_name,
        this.age,
        this.dateOfVisit,
        this.timeOfVisit,
        this.comments,
        this.assitantName
   );
   let JSONobj = JSON.stringify(jsObj)
    fs.writeFile(
      `visitor_${this.full_name}.json`,JSONobj,
      function (err) {
        if (err) throw err;
        console.log("JSON file saved")
      }
    );
  }
}
let alice = new Visitor(
  "alice_cooper",
  "42",
  "01/08/2020",
  "12h00",
  "No comment",
  "Mazibuko"
);
let bob = new Visitor(
    "bob_marley",
    "24",
    "02/08/2020",
    "09:00",
    "No comment",
    "Mazibuko"
);
function load(name){
    regName = name.replace(/\s/g, '_').toLowerCase()
    fs.readFile(`visitor_${regName}.json`, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        console.log(obj)
      });
}
alice.save()
// bob.save()
// load("Alice Cooper")
// load("Bob Marley")
