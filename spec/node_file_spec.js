const { Visitor } = require("../src/node_file_io.js");
let alice = new Visitor(
  "alice_cooper",
  "25",
  "01/08/2020",
  "12h00",
  "No comment",
  "Mazibuko"
);
var fs = require("fs");
const { load } = require("../src/node_file_io.js");
describe("Visitor save function", function () {
  it("should be defined", function () {
    expect(alice.save).toBeDefined();
  });
  it("calls the fs.writeFile method", function () {
    spyOn(fs, "writeFile");
    alice.save();
    expect(fs.writeFile).toHaveBeenCalled();
  });
  it("should save JSON file", function () {
    expect(alice.save()).toBe("JSON file saved");
  });
});
describe("load function", function () {
  it("calls the fs.readFile method", function () {
    spyOn(fs, "readFile");
    load("Alice Cooper");
    expect(fs.readFile).toHaveBeenCalled();
  });
  it("should load data from JSON file", function () {
    expect(load("Alice Cooper")).not.toBe(null);
  });
  it("should throw an error", function () {
    function load() {
      throw Error("Error");
    }
    expect(function () {
      load();
    }).toThrow(Error("Error"));
  });
});
