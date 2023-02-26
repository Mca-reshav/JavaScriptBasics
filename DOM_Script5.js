//DOM Create method
// createElement: tag    createTextNode: just text      createComment: just comment

var a=document.createElement("h3");
var b=document.createTextNode("This is just a text");
var c=document.createComment("This is just a comment");
console.log(a);
console.log(b);
console.log(c);


// DOM Append Method: tag + text
// appendChild: to add/attach tag or text      insertBefore:position

//appendChild: always add element at the end
//insertBefore: it will help to relocate the inserted element 

var newElement=document.createElement("h3");
var newText=document.createTextNode(" This is a Text1")
newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement);
document.getElementById("test").style.background="grey";border="1px solid black";
console.log(newElement);

//insertBefore

var newElement=document.createElement("h3");
var newText=document.createTextNode("This is a Text2");
newElement.appendChild(newText);
var target=document.getElementById("test");
target.insertBefore(newElement,target.childNodes[0]);


//Other Methods of append:
// insertAdjacentElement    insertAdjacentHTML  insertAdjacentText

//previously, appendChild and insertBefore work only on already created tags so that it can be appended later.

//but, insertAdjacent methods will create and append both


// 1. insertAdjacentElement

/*DOM insertAdjacent Positions: beforeBegin
                                afterBegin
                                beforeEnd
                                afterEnd 
*/

var newElement=document.createElement("h3");
var newText=document.createTextNode("This is a Text3");
newElement.appendChild(newText);
var target=document.getElementById("test");
target.insertAdjacentElement("beforebegin",newElement).style.color="red";

var target2=document.getElementById("test");
var newElement2="<h3>This is a Text4</h3>";
target2.insertAdjacentHTML("afterend",newElement2);