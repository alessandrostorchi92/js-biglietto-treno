const itineraryLength = prompt("Inserisci la distanza in km da percorrere");
const ageUser = prompt("Inserisci la tua età");
const ticketPrice = 0.21 * parseInt(itineraryLength);
const priceInCent = ticketPrice.toFixed(2)

console.log(ticketPrice)
console.log(priceInCent)