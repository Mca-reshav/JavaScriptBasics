//ClassList Method

/*

add(class1,class2,....)     contains(class)     item(index)   
remove(class1,class2,....)  toggle(class)       length    

*/

// 1.add

document.getElementById("header").addEventListener("click",function(){
    document.getElementById("header").classList.add("xyz");
    var a=document.getElementById("header").classList;
    console.log(a);
});


// 2. remove

document.getElementById("header").addEventListener('dblclick',efg);
function efg(){
    document.getElementById("header").classList.remove("xyz");
    var a=document.getElementById("header").classList;
    console.log(a);
}

// 3. length

var a=document.getElementById("header").classList.length;
console.log(a);

// 4. toggle: load or reload an event

document.getElementById("header").addEventListener("mouseenter",
 function (){
    this.classList.toggle("xyz");
    var a ;
     a=document.getElementById("header").classList;
    console.log(a);
 });

 // 5.item

 var a=document.getElementById("header").classList.item(0);
console.log(a);

// 6. contains: to check the existence is either true or false

var a=document.getElementById("header").classList.contains("abc");
console.log(a);
