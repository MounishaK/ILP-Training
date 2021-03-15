
function employee(id,name)
{
    this.id = id;
    this.name = name;
    this.display = function()
    {
        document.write("<br/>");
        document.write("id is "+this.id);
        document.write("<br/>name is "+this.name);
        //document.write("<br/>name is "+this.age);
        
    }
}
//var emp1 = new employee();
//emp1.display();

var emp1 = new employee(100,"ravi");
emp1.display();

employee.prototype.age = 21;
employee.prototype.info = function()
{
    document.write("<br/> this run time behaviour")
}

//refer git repo for full code.
//document.write()
