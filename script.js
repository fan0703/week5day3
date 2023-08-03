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
  // Part 3 cannot work
const favoriteThings = document.querySelector("#favorite-things")
favoriteThings.classList.remove("Staring-pepole-down")

 
  // Part 4
const specialTitleArr = document.querySelectorAll(".special-title");
for(i = 0; i < specialTitleArr.length; i++ ){
  specialTitleArr[i].style.fontSize = "2rem"
}
  // Part 5 can not work as well
const pastRaces = document.querySelector("#past-races")
pastRaces.classList.remove("Chicago")
  // Part 6 not work, seems like didn't select the correct item
 const addli = pastRaces.createElement("li")
 addli.textContent = "Boston"
 pastRaces.appendChild(addli)

  // Part 7


  // Part 8


  // Part 9




});
