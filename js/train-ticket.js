const itineraryLength = prompt("Inserisci la distanza in km da percorrere");
const ageUser = prompt("Inserisci la tua età");
const ticketPrice = 0.21 * parseInt(itineraryLength);
const priceInCent = ticketPrice.toFixed(2);
const couponChildren = (ticketPrice.toFixed(2)) * 0.2;
const couponElders = (ticketPrice.toFixed(2)) * 0.4;
const discountPriceChildren = (priceInCent - couponChildren).toFixed(2);
const discountPriceElders = (priceInCent - couponElders).toFixed(2); 

console.log(ticketPrice);
console.log(priceInCent);
console.log("couponChildren", couponChildren);
console.log("couponElders", couponElders);
console.log("discountPriceChildren", discountPriceChildren);
console.log("discountPriceElders", discountPriceElders);

if (ageUser < 18) {
    console.log("L'utente pagherà il prezzo intero scontato del 20%", discountPriceChildren );
} else if ( ageUser >= 18 && ageUser <= 65) {
    console.log("L'utente pagherà il prezzo intero", priceInCent);
} else {
    console.log("L'utente pagherà il prezzo intero scontato del 40%", discountPriceElders);    
}
