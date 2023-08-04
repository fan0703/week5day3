let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.querySelector('#main-title').textContent = "Hi! I am DOM Toretto. Welcome!"

  // Part 2
document.querySelector('body').style.backgroundColor = "yellow"
  // Part 3 
const favoriteThings = document.querySelector("#favorite-things")
favoriteThings.removeChild(favoriteThings.lastElementChild)

 
  // Part 4
const specialTitleArr = document.querySelectorAll(".special-title");
for(i = 0; i < specialTitleArr.length; i++ ){
  specialTitleArr[i].style.fontSize = "2rem"
}
  // Part 5 can not work 
// const cityArr = document.querySelector("#past-races li:nth-child(4)").remove();
const cityArr = document.querySelectorAll(".city").classList.remove("chicago")
// cityArr.slice(4)
// console.log(cityArr)

// cityArr.classList.remove("Chicago")
// cityArr.includes("Chicago")

// for(i = 0; i < pastRaces.length; i++){
//   if(pastRaces[i].textContent === "Chicago"){
//     pastRaces.remove("Chicago")
//   }
// }
//   // Part 6 not work, seems like didn't select the correct item
  function createLi(){
 const addli = pastRaces.createElement("li")
 addli.textContent = "Boston"
 pastRaces.appendChild(addli)
}
  // Part 7
//document.querySelector()

  // Part 8


  // Part 9




});
