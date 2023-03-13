const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// hex colors works like : 
btn.addEventListener("click", function(){
    let hexColor = "#";
    for (i=0; i<6; i++){
         hexColor += hex[Math.floor(Math.random()*hex.length)];

    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;


     
});
