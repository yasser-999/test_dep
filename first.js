
// document.write("<h1>Elzero</h1>")
// document.querySelector("h1").style.color='blue'
// document.querySelector("h1").style.fontSize='80px'
// document.querySelector("h1").style.fontWeight='bold'
// document.querySelector("h1").style.textAlign='center'
// document.querySelector("h1").style.fontFamily='Arial'

// ----------------------------------------------------------------------

// console.log("%cElzero %cWeb %cSchool","color:red;font-size:40px;","color:green;font-size:40px;font-weight:bold;",
//     "color:white;font-size:40px;background-color:blue;")


// ----------------------------------------------------------------------------------------------

// console.group("Group 1");
// console.log("Messge One ");
// console.log("Messge Two");
// console.groupCollapsed("Child Group");
// console.log("Messge One ");
// console.log("Messge Two");
// console.groupCollapsed("GRand Child Group");
// console.log("Messge One ");
// console.log("Messge Two");
// console.groupEnd();
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("Messge One ");
// console.log("Messge Two");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"])

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// stopting the excution:
// first methode:
/*  window.alert("error")
    console.log("Iam In Console");
    document.write("Iam In Page");
*/
// second-methode
window.onload=function(){
    console.log("Iam In Console");
    document.write("Iam In Page");
}

window.stop();
