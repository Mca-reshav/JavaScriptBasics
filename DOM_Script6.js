// replaceChild and removeChild

var newElement=document.createElement("li");
var newText=document.createTextNode("Papaya");
newElement.appendChild(newText);
var target=document.getElementById("list1");
var oldElement=target.children[1];
target.replaceChild(newElement,oldElement);

var target1=document.getElementById("list2");
var oldElement1=target1.children[2];
target1.removeChild(oldElement1);


//CloneNode(): true- inside text or false- copy tags or attributes

var target2=document.getElementById("list1").children[0];
var copyElement=target2.cloneNode(true);//(false);
console.log(copyElement);
document.getElementById("list2").appendChild(copyElement);


// contains(): true or false
// to find child or grand or great grand child element by targeting parent element

var parentElement=document.getElementById("list1");
var target3=document.getElementById("orange");
var find=parentElement.contains(target3);
console.log(find);


//hasAttribute and haschildNode: true or false

var target4=document.getElementById("list1");
var find1=target4.hasAttribute("id");//("class");
console.log(find1);

var target5=document.getElementById("list1");
var find2=target5.hasChildNodes();
console.log(find2);


//isEqualNode

/*criteria: same node type
            same node name
            same node value
            same child node
            same attributes
            same attribute values

*/

var a=document.getElementById("list1").firstElementChild;
var b=document.getElementById("list2").children[0];
var equal=a.isEqualNode(b);
console.log(equal);// to see he difference refer line no 13/18 by changing there attribute