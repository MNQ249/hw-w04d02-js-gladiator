
export default class Arena{
    constructor(name){
this.name = name;
this.gladiators = [];
    }
    addGladiator(gladiator){
        if(this.gladiators.length<2){
            console.log('is full');
        }
        this.gladiators.push(gladiator);
    }
    fight(){

if (this.gladiators[1].weapon === this.gladiators[0].weapon){
    this.gladiators = [];
}
else if ((this.gladiators[1].weapon == 'Trident' && this.gladiators[0].weapon == 'Spear')
|| (this.gladiators[1].weapon == 'Club' && this.gladiators[0].weapon == "Trident")){
    this.gladiators.shift();
}
else if ((this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon == 'Spear')
|| (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon == "Trident")){
    this.gladiators.pop();
}
    }
}





