/*
object : any real world entity
examples - person, car, animsl, bank,etc..
*/

// one way object creation using object literal style.

var empobj = {id : 100, name: "Blue", salary: 12000};
document.write("<br/>")
document.write("Employee Object <br/>")
document.write(empobj)
document.write("<br/>")
document.write("Id is " + empobj.id+"<br/>")
document.write("Name is " + empobj.name+"<br/>")
document.write("Salary is "+ empobj.salary+"<br/>")

//convert object into string Format
var empString = JSON.stringify(empobj);
document.write("<br/>")
document.write("Employee Object in string fromat <br/>")
document.write(empString)
document.write("<br/>")
document.write("Id is " + empString.id+"<br/>")
document.write("Name is " + empString.name+"<br/>")
document.write("Salary is "+ empString.salary+"<br/>")

//convert string to JSON format
var empJSON = JSON.parse(empString);
document.write("<br/>")
document.write("Employee Object in JSON fromat <br/>")
document.write(empJSON)
document.write("<br/>")
document.write("Id is " + empJSON.id+"<br/>")
document.write("Name is " + empJSON.name+"<br/>")
document.write("Salary is "+ empJSON.salary+"<br/>")