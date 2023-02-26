//DOM  Traversal Method

/*

parentNode      parentElement       Children        ChildNode       firstChild      firstElementChild       lastChild       lastElementChild        nextElementSibling      nextSibling     previousElementSibling      previousSibling

*/

// 1. ParentNode & ParentElement

var a=document.getElementById("inner").parentElement;
console.log(a); //if there is no parent then it will return null


var a=document.body.parentElement;
console.log(a);

document.getElementById("A").parentElement.style.background="blue";


var b;
b= document.getElementById("main").parentNode;//.parentElement;     to see the difference
console.log(b);
//ParentNode: it will return something



// 2. Children & ChildNodes

var c;
c=document.getElementById("inner").children;
console.log(c); //return and count only html tags(html collection)

var d=document.getElementById("inner").childNodes;
console.log(d); //return and count both tags and text(nodeList) so it is more useful



// 3. firstChild, firstElementChild and lastChild,  lastElementChild

var e=document.getElementById("inner").firstChild;
console.log(e); // to see the difference you must go to the html page line no: 12 and 13: with enter and without enter
//it will target all like: enter, comment and blankSpaces
var f;
f=document.getElementById("inner").firstElementChild.style.color="red";
console.log(f);


// 4. nextSibling, nextElementSibling, previousSibling and previousElementSibling

document.getElementById("C").nextElementSibling.style.color="yellow";

var g=document.getElementById("C").previousElementSibling.innerHTML;
console.log(g);

