// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}

Car.prototype.getMakeModel=function(){
		return `${this.make} ${this.model}`;
	};

function SportsCar(make, model, topSpeed) {
	Car.call(this,model,topSpeed);
	this.topSpeed=topSpeed;
}

Sportscar.prototype=Object.create(Car,prototype);
SportsCar.prototype.constructor=SportsCar;

SportsCar.prototype.getTopSpeed=function(){
		return this.topSpeed;
	};

const car = new SportsCar("Ferrari", "Testarossa", 200);
car.getTopSpeed();
car.getMakeModel();

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
