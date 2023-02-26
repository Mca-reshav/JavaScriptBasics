//use capture: addEventListener(event, function, useCapture);

// use Capture: either true or false 


document.querySelector("#inner").addEventListener('click',function(){
    alert('Inner Div');
},true);

//firstly outer div will be called then the inner div 

document.querySelector("#outer").addEventListener('click',function(){
    alert('Outer Div');
},true);




//Remove Event listener()
/*
document.getElementById("inner").addEventListener("mouseenter",abc);

document.getElementById("inner").addEventListener("click",xyz);

function abc(){
    document.getElementById("inner").style.background="rgb(215, 133, 101)";
}

function xyz(){
    document.getElementById("inner").removeEventListener("mouseleave",abc);
}
*/