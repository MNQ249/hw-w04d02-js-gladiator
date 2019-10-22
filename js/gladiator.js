
export default class Gladiator {

    constructor(name, weapon){
        
       if( ['Spear', 'Club', 'Trident'].includes(weapon) === true){
           this.name = name;
           this.weapon = weapon;
        
        } else{ 
            console.log( "not found ");
    }
    }


}


// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"




