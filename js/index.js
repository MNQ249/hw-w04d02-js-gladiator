
import Arena from './arena.js';
import Gladiator from './gladiator.js';


const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator('mesfer',"Spear");
console.log(max);
// max.name = 'Jesse';//"Jesse"
// max.weapon ='Taco'; //error
// console.log(max.name + " " + max.weapon);

const colosseum = new Arena("Colosseum");
// console.log(colosseum.name); //Colosseum
// console.log(colosseum.gladiators);//[]
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
console.log(colosseum.gladiators);

colosseum.fight();
console.log(colosseum.gladiators); // => [Gladiator]

//  colosseum.name = "megalopolis";
// console.log(colosseum.name.charAt(0).toUpperCase() + colosseum.name.slice(1)); // => Megalopolis


 




 

