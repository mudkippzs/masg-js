/***
Martial Arts Name Generator
@author: alex sheridan - github: mudkippzs

**/

// simple die roller
class roller{

//set the D## to roll and roll it		
	constructor(die_min,die_max){
		
		this.result = this.roll_dice(die_min,die_max);
		console.log("Result for D" + die_max + " is:" + this.result);
	}
	
// gets a random int between min and max (inclusive both) and returns it
	roll_dice(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}	
}

class data_list{
	
	constructor(
	
}



