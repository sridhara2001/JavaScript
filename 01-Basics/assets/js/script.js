//SCOPE
var a = 12;
const b = 33;
let c = 44;
var d = 50;

document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p><hr>`);

if(d>20){
      document.write(`<p>CONDITION IS TRUE</p>`);
      document.write(`<p>a = ${a}</p>`);
      document.write(`<p>b = ${b}</p>`);
      document.write(`<p>c = ${c}</p>`);
      document.write(`<p>d = ${d}</p><hr>`);

      var x = 100;
      let y = 200;
      const z = 300;

      document.write(`<p>x = ${x}</p>`);
      document.write(`<p>y = ${y}</p>`);
      document.write(`<p>z = ${z}</p><hr>`);
}

document.write(`<p>x = ${x}</p>`);
// document.write(`<p>y = ${y}</p>`); //p3.html:46 Uncaught ReferenceError
// document.write(`<p>z = ${z}</p><hr>`); //p3.html:47 Uncaught ReferenceError

var isAdmin = false;
document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
document.write(`<p>${isAdmin}</p>`);

var title = "welcome to JS"; /* string and char => string */
document.write(`<p>title = ${title}</p>`);
document.write(`<p>title = ${typeof(title)}</p>`);

var xx = 1234;
document.write(`<p>xx = ${xx}</p>`);
document.write(`<p>xx = ${typeof(xx)}</p>`);

var yy = 34.34; /* number, float, hexa and exponential => number */
document.write(`<p>yy = ${yy}</p>`);
document.write(`<p>yy = ${typeof(yy)}</p>`);

//Array
var colors = ["orange", "red", "green", "yellow", 100, true, 500.5]
document.write(`<p>colors = ${colors}</p>`);
document.write(`<p>colors = ${typeof(colors)}</p>`);

//Object
var user = {
      // key : value => property
      name : "ramesh",
      email : "user@example.com"
};
document.write(`<p>user = ${user}</p>`);
document.write(`<p>user = ${typeof(user)}</p>`);

// function block - behaviors
// function name (params)

function defaultFun() // Function Declaration
{
      document.write(`<p>This is DEFAULT FUNCTION.</p>`);
}
defaultFun();
function parameterFun(name, email){
      document.write(`<p>This is PARAMETERIZED FUNCTION.</p>`);
      document.write(`<p>First Parameter is : ${name}</p>`);
      document.write(`<p>Second Parameter is : ${email}</p>`);
}
parameterFun("JavaScript", "admin@javascript.com")