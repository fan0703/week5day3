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
for(let i = 0; i < specialTitleArr.length; i++ ){
  specialTitleArr[i].style.fontSize = "2rem"
}
  // Part 5 
// const pastRaces = document.querySelector("#past-races li:nth-child(4)")
// pastRaces.remove()
const prLi = document.querySelector("#past-races")
const races = prLi.children
for(let i = 0; i < races.length; i++){
  if(races[i].textContent === 'Chicago'){
    prLi.removeChild(races[i])
  }
}
//   // Part 6 
const pastRaces2 = document.querySelector("#past-races")
 const li = document.createElement("li")
 li.textContent = "Boston"
pastRaces2.appendChild(li)

})

  // Part 7
//document.querySelector()

  // Part 8


  // Part 9




// });
