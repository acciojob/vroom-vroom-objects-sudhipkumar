// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;

	Car.prototype.getMakeModel=function(){
		return `${this.make} ${this.model}`;
	}
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,model,topSpeed);
	this.topSpeed=topSpeed;

	SportsCar.prototype.getTopSpeed=function(){
		return this.topSpeed;
	}
}

Sportscar.prototype=Object.create(Car,prototype);
SportsCar.prototype.constructor=SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
