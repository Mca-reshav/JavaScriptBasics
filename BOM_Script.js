
//BOM: Browser object model, previously DOM is for viewport
        /*Functions: get width and height of the browser window
                     open and close browser window
                     move and resize the window
                     scroll to browser window
                     get URL, hostname, protocol of browser window
                     get history of the browser      
        
        */

// 1. window width and height: inner and outer

function resize(){
    console.clear();
    var iwidth=window.innerWidth;
    console.log('innerWidth:'+iwidth);

    var owidth=window.outerWidth; 
    console.log('outerWidth:'+owidth);
    
}

//2. windowopen and close: position will be default

//traverse from one window to another one
//syntax: window.open(URL,name(not mandatory),specs(top, left,width,height))

/*var myWindow;
function openWindow(){
    myWindow=window.open("http://127.0.0.1:5500/JS/DOM.html"," ","width=500px,left=100px,height=300px,top=50px");
}
function closeWindow(){
    myWindow.close();
}
*/

//3.moveBy and moveTo
var myWindow;
function openWindow(){
    myWindow=window.open("","","width=500px,left=100px,height=300px,top=50px");
    myWindow.document.write("<p>This is second window</p>")
    
    
}
function closeWindow(){
    myWindow.close();
}
function moveWindow(){
    myWindow.moveBy(100,100);//moveTo : to see the effect
    myWindow.focus();//comment to see the effect
}


//4.resizeBy and resizeTo

function resizeWindow(){
    myWindow.resizeTo(400,400);
    myWindow.focus();
}

//5.scrollBy and scrollTo: vertical scroll as Y axis and horizontal scroll as X axis( - + )

function scrollWindow(){
    window.scrollTo(0,0);
}

//6.Location Object
//get properties: hash  host    hostname    href    origin  pathname    port    protocol    search

console.log(location);
console.log(location.hostname);
document.write(location.port);

function newFunction(){
     var x=location.href="http://127.0.0.1:5500/JS/BOM.html"

     document.write("This is your href: "+x)
}
 
/*location methods: assign()
                    reload()
                    replace()
*/

//a. reload()

function newFunction(){
    var y=location.reload();
    console.log(y);
}

//b. assign: it can go back
function newFunction(){
    location.assign("http://127.0.0.1:5500/JS/DOM.html");
}
//comment assign and use replace to see the effect


// 7. history object

//it uses the length property

console.log(history);

// methos of history: back, forward and go

//a. back and forward
function back(){
    history.back();
}
function forward(){
    history.forward();
}

//b. go(1):to forward number of pages
//go(-1): to back 

function go(){
    history.go(1);
}