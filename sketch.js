let container =document.querySelector("#container");
// for loop for creating a number x number div grid
for(let i =0 ; i < 16; i++){
    let child =document.createElement("div");
    child.classList.add("row");
        for(let j = 0; j < 16; j++){
            let grandChild = document.createElement("div");
            grandChild.classList.add("square");
            child.appendChild(grandChild);
        };
    container.appendChild(child);
};



// event for changing color of each square whenever i pass through them,like a hover effect 
let squares = document.querySelectorAll(".square");
// random color each square
squares.forEach(square => {
  square.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  });
});

// reset button
let resBtn =document.createElement("button");
resBtn.textContent="Reset board";
resBtn.addEventListener("click",()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor ="white";
    })
})
//color button 
let colorBtn = document.createElement("button");
colorBtn.textContent = "color";

// choice button
let choiceBtn = document.createElement("button");
choiceBtn.textContent="click to change board dimension!"
choiceBtn.addEventListener("click",function (){
    removeBoard();
    let squarePside = Number(prompt("how many squares per side do you want,up to a maximum of 100?(only numbers are allowed,the default board is 16x16)"));
    while( (isNaN(squarePside)) || (squarePside > 100)){
        squarePside = Number(prompt("how many squares per side do you want,up to a maximum of 100?(only numbers are allowed,the default board is 16x16)"));
    }
    createGRid(squarePside);
    
    squarePside="";
    randomSquareColor();
});

let header = document.querySelector("#header");
header.appendChild(resBtn);
header.appendChild(choiceBtn);

// cleaning the board function
function removeBoard(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild)
    }
}
function createGRid(squar){
    for(let i =0 ; i < squar; i++){
        let child =document.createElement("div");
        child.classList.add("row");
            for(let j = 0; j < squar; j++){
                let grandChild = document.createElement("div");
                grandChild.classList.add("square");
                child.appendChild(grandChild);
            };
        container.appendChild(child);
    };
};
// random number generating function to use for rgb collors
function randomNumber() {
    return Math.floor(Math.random() * 256);
};
function changeColor(event) {
    event.target.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}
//random square color with event trigger
function randomSquareColor(){
    let squares = document.querySelectorAll(".square");
    squares.forEach( square =>{
        square.addEventListener("mousedown",(e)=>{
            e.preventDefault();
            squares.forEach(square => {
                square.addEventListener("mouseenter",changeColor)
            });
            document.addEventListener("mouseup",()=>{
                squares.forEach(square =>{
                    square.removeEventListener("mouseenter",changeColor)
                });
            },{once:true});
        });
    });
};

  





