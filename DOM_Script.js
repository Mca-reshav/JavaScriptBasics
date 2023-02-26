var element;
element=document;
console.log(element);   // it will console the all tags 

element=document.body;
console.log(element);   //return targeting the particular tag

//----------------------------------------------


element=document.getElementById("headers");
console.log(element);

element=document.getElementsByClassName("wrapper");
console.log(element);

element=document.getElementsByTagName("div")[2];
console.log(element);


//----------------------------------------------

// Get/Set with DOM

// Get with DOM: html/ text/ attribute

/*DOM get methods: -innerText
   -innerHtml 
   -getAttribute
   -getAttributeNode
   -Attributes
 */  

 var a=document.getElementById("headers").
 //innerText;  only text inside the tag
 //innerHTML;   text and html tags 
 //getAttribute("class");   return the (class) attribute in text format
 //getAttributeNode("class"); return the (class) attribute in html format
//attributes; //both (class and id) nodeMap
//attributes[0];// return particular attribute(class, id, style)
attributes[1].value;// return in simple plain text
 console.log(a);


 //----------------------------------------------


 /*DOM set methods:-innerText
   -innerHtml 
   -setAttribute
   -removeAttribute
   -Attributes
 */  

 var b;
 document.getElementById("headers").innerText="Back-End Technologies";
 //document.getElementById("headers").setAttribute("class","head-banner");
 b=document.getElementById("headers")
 console.log(b);//innerText and className both get and set with new values 


 var c;
 document.getElementById("headers").setAttribute("style","border:2px dotted yellow");
 c=document.getElementById("headers");
 console.log(c);   //here the style is created and values are get and set 


 var d;
 document.getElementById("headers").removeAttribute("style");
 d=document.getElementById("headers");
 console.log(d);// the style attribute is removed along with its property values


 var e;
 document.getElementById("headers").attributes[0].value="xyz";
 e=document.getElementById("headers").getAttribute("class");
 console.log(e);

 

 //----------------------------------------------------

 /*new targeting method: we will not rely on getElementById/Class/Tag

 but we will use: querySelector/querySelectorAll

 querySelector --> document.querySelector(CSS Selector): for first one only

 querySelectorAll --> document.querySelectorAll(CSS Selector) for each one
  */


 var x;
 document.querySelector("#headers").innerHTML="<h1>Wow</h1>";
 document.querySelector("#headers").setAttribute("style","color:yellow");
 x=document.querySelector("#headers");
 console.log(x);


 var y=document.querySelectorAll("a")[0].innerHTML="House";
 console.log(y);


 //------------------------------------------------------


 /*DOM CSS styling method:  -style
                            -ClassName
                            -ClassList

*/

var z;
document.querySelector("#headers").style.border="3px dotted yellow";
z=document.querySelector("#headers").style.border;
console.log(z);


//---------------------------------------------------


//DOM addEventListener()

/*Basic events of JavaScript: 15

click(onclick)    doubleClick(ondblclick)   rightClick(oncontextmenu)   keyPress(onkeypress)    keyUp(onkeyup)    mouseHover(onmouseenter)    mouseOut(onmouseout)    mouseDown(onmousedown)    mouseUp(onmouseup)    load(onload)    unload(onunload)    resize(onresize)  scroll(onscroll)     

*/

//example: <button onClick="abc()"></button>


// 1. Assign events using the HTML DOM


/*
document.getElementById("headers").onmouseenter=abc();
function abc(){
  document.getElementById("headers").style.color="lightblue";
}
*/


// 2. DOM addEventListener() method: it is very useful as you can assign multiple events

document.getElementById("headers").addEventListener("click",abc);
function abc(){
  document.getElementById("headers").style.color="lightblue";
  document.getElementById("headers").style.background="green";
}


// Two different events can be used for same element

document.getElementById("nav-bars").addEventListener("click",efg);
document.getElementById("nav-bars").addEventListener("dblclick",
function(){
  document.getElementById("nav-bars").style.background="red";
});
function efg(){
  document.getElementById("nav-bars").style.background="green";
}


//same event can be called more than once for an element 

document.getElementById("html-img").addEventListener("click", click_1);

document.getElementById("html-img").addEventListener("click", function(){

//document.getElementById("html-img").style.border="10px solid red"; 

//"this" keyword: is used to replace function called for an event, so you need not to re-write the code of document.get

this.style.borderRadius="10px"; //uncomment line no:171  and comment line no: 175 to see the effect 

});
function click_1(){

  document.getElementById("html-img").style.background="white";

}

