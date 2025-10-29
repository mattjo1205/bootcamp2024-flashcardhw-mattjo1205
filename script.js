const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
 let disp_inf = document.getElementById("card-content");
function displayCard() {
   disp_inf.innerText = flashcards[currentIndex].term
}
 

// The rest of the code you will write is apart of event listeners

function card_flip(){
    if(showingTerm){
        disp_inf.innerText = flashcards[currentIndex].definition;
        showingTerm = false; 
    }else{
        disp_inf.innerText = flashcards[currentIndex].term;
        showingTerm = true; 
    }
}
displayCard(); 
let card_flipper= document.getElementById("flashcard");
card_flipper.addEventListener("click", () => card_flip());

let prev_but = document.getElementById("prev-btn"); 
prev_but.addEventListener("click", () => {
     if(currentIndex == 0){
        currentIndex = flashcards.length; 
    }else{
        currentIndex--; 
    }
    displayCard(); 
});

let next_but = document.getElementById("next-btn"); 
next_but.addEventListener("click", () => {
    currentIndex++; 
    currentIndex %= flashcards.length;  
    displayCard(); 
});

let add_but = document.getElementById("add-card-btn"); 
add_but.addEventListener("click", () => {
   let term_input = document.getElementById("new-term");
   let def_input = document.getElementById("new-definition");
   flashcards.push({term: term_input.value, definition: def_input.value}); 
   term_input.value = ""; 
   def_input.value = "";
}); 


// This line will display the card when the page is refreshed
window.onload = displayCard;
