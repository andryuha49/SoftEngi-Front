
class Apple{
	constructor(type, ){
 	this.type = type;
    this.color = "red";
	}
	get getInfo(color){
		return [1,2,3,4];
	}
}

apple= new Apple('macintosh');

apple.getInfo



// inheritance 

class Semerenko extends Apple{
	constructor(props){
		super(props);
		this.color = "green";
	}
}

// incapsulation

class Appleaa{
	constructor(type){
 	this.type = type;
    this.color = "red";
	}
	getInfo(){
		return this.color + ' '
        + this.type + ' apple';
	}
}
