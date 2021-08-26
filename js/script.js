class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    return (this.food += 2);
  }

  eat() {
    if (this.food > 0) {
      return (this.food -= 1);
    } else {
      return (this.isHealthy = false);
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passageiros = [];
  }

  getAvailableSeatCount() {
    return this.capacity - this.passageiros.length;
  }

  get join() {
    return this.passageiros;
  }
  set join(passageiro) {
    if (this.getAvailableSeatCount() > 0) {
      this.passageiros.push(passageiro);
    }
  }

  shouldQuarantine() {
    let result;
    this.passageiros.forEach(element => {
      if (element.isHealthy === false) {
        result = `true since ${element.name} is sick`;
      } else {
        result = "nobody is sick";
      }
    });
    return result;
  }

  totalFood() {
    let sum = 0;
    this.passageiros.forEach(element => {
      sum += element.food;
    });
    return sum;
  }
}

let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
