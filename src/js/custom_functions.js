import { toggle } from "./hamburger";
import { dayOfWeek } from "./dayInWeek";
import { substractNumbers } from "./substractTwoNumbers";
import { sumItemsArray } from "./sumItemsArray";

let getContainerJs = document.querySelector('.article__container--js');

if (getContainerJs) {
    getContainerJs.innerHTML = `Dzisiaj jest ${dayOfWeek}!`;
    getContainerJs.style.color = 'violet';
    getContainerJs.style.textAlign = 'center';
}

function greeting(name, age) {
    const message = `Witaj ${name}. Masz ${age} lat.`;
    console.log(message);
}

greeting('Bartek', 9999);

console.log(substractNumbers(1020,99));

const fewNumbers = [4,1,10];

console.log(sumItemsArray(fewNumbers));