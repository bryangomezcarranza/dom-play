// alert("Hi! From Dom Play!")

/* 

    Create an app that on click actors lines are highlighted.


    With a single click, highlight (bold or otherwise) all lines for a specific actor in a play
    Un-highlight (normal or otherwise) all lines from all other actors in the play
    
    The function(s) created to do the work must accommodate any number of actors, and any number of additional lines added to the page
    
    HTML "hooks" may be added to the page, meaning you can edit the HTML to enable your scripts to perform properly

*/ 

// document.querySelector(".hamlet").style.backgroundColor = "yellow";

// This refers to the cunftion 
function highlight(el) {

    // Ternanry example 
    // let currentColor = el.style.backgroundColor == 'white'
    // return (currentColor ? el.style.backgroundColor ='orange' : el.style.backgroundColor ='white');
    
    if(el.style.backgroundColor == 'white') {
        el.style.backgroundColor='orange';  
    } else {
        el.style.backgroundColor='white';  
    }
}

function myAlert() {
    alert("Im clicked!")
}

function highlightActor(actor) {
   // alert("Hi, I'm " + actor);
   for(const mySpan of spans) {
        if(actor == mySpan.dataset.actor) {
            mySpan.style.backgroundColor = 'orange';
        } else {
            mySpan.style.backgroundColor = 'white';
        }
   }
}


const spans = document.querySelectorAll("#play span");
console.log(spans)

// works like a ForEach on swift ui 
for(const mySpan of spans) {
    // Listener
    //mySpan.addEventListener("click", myAlert);
    mySpan.addEventListener("click", function(ev) {
        highlightActor(mySpan.dataset.actor);
    });
   // alert(mySpan.dataset.actor);
}