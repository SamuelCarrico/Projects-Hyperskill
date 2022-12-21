// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

/*STEP 1 AND 2

console.log("Starting to make a coffee");
console.log("Grinding coffee beans");
console.log("Boiling water");
console.log("Mixing boiled water with crushed coffee beans");
console.log("Pouring coffee into the cup");
console.log("Pouring some milk into the cup");
console.log("Coffee is ready!");


const nbOfCoffeesStr = "Write how many cups of coffee you will need:";
const askWaterStr = "Write how many ml of water you want to add: ";
const askMilkStr = "Write how many ml of milk the coffee machine has:";

const reqMlOfWater = 200;
const reqMlOfMilk = 50;
const reqGOfGrains = 15;

let askWater = input(askWaterStr);
let askMilk = input(askMilkStr);
let askGrains = input(askGrainsStr);
const askNbOfCoffees = input(nbOfCoffeesStr);

let mlOfWaterNeeded = reqMlOfWater * askNbOfCoffees;
let mlOfMilkNeeded = reqMlOfMilk * askNbOfCoffees;
let gOfGrainsNeeded = reqGOfGrains * askNbOfCoffees;



// STEP 2
const arrayKf = [(askWater / reqMlOfWater), (askMilk / reqMlOfMilk), (askGrains/ reqGOfGrains)];
const minKf = Math.floor(Math.min(...arrayKf));
const maxKf = Math.floor(Math.max(...arrayKf));

const n = parseInt(askNbOfCoffees, 10);

if(n > minKf) {
    console.log(`No, I can make only ${minKf} cups of coffee`);
}
else if (n === minKf) {
    console.log(`Yes, I can make that amount of coffee`);
}
else {
    console.log(`Yes, I can make that amount of coffee (and even ${minKf - n} more than that)`);
}
*/

// STEP 3

const askFillWaterStr = "Write how many ml of water you want to add: ";
const askFillMilkStr = "Write how many ml of milk you want to add:  ";
const askFillBeansStr = "Write how many grams of coffee beans you want to add: ";
const askFillCupStr = "Write how many disposable cups you want to add: ";
const choiceCoffeeStr = "What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: ";

const mlOfWaterAvailable = 400;
const mlOfMilkAvailable = 540;
const beansOfCoffeeAvailable = 120;
const nbOfCupAvailable = 9;
const moneyAvailable = 550;



function Print() {
    console.log(" ");
    console.log("The coffee machine has : ");
    console.log(`${coffeeMachine.water} ml of water`);
    console.log(`${coffeeMachine.milk} ml of milk`);
    console.log(`${coffeeMachine.beans} g of coffee beans`);
    console.log(`${coffeeMachine.cups} disposable cups`);
    console.log(`$${coffeeMachine.money} of money`);
    console.log(" ");
}


let coffeeMachine = {
    water: mlOfWaterAvailable,
    milk: mlOfMilkAvailable,
    beans: beansOfCoffeeAvailable,
    cups: nbOfCupAvailable,
    money: moneyAvailable,
    fill: function() {
        const inputWater = parseInt(input(askFillWaterStr), 10);
        const inputMilk = parseInt(input(askFillMilkStr), 10);
        const inputBeans = parseInt(input(askFillBeansStr), 10);
        const inputCups = parseInt(input(askFillCupStr), 10);
        if(inputWater > -1 && inputMilk > -1 && inputBeans > -1 && inputCups > -1) {
            this.water += inputWater;
            this.milk += inputMilk;
            this.beans += inputBeans;
            this.cups += inputCups;
        } else {
            return console.log("Fill, no empty");
        }
    },
    buy: function() {
        const inputTypeCoffeeStr = input(choiceCoffeeStr);
        const inputTypeCoffeeInt = parseInt(inputTypeCoffeeStr, 10);
        if(inputTypeCoffeeInt === 1) {
            if(this.water < 250)  {
                console.log('Sorry, not enough water!');
            } else if (this.beans < 16) {
                console.log('Sorry, not enough coffee beans!');
            } else if (this.cups < 1) {
                console.log('Sorry, not enough cup!');
            } else {
                console.log("I have enough resources, making you a coffee!");
                this.water -= 250;
                this.beans -= 16;
                this.cups -= 1;
                this.money += 4;
            }
        } else if (inputTypeCoffeeInt === 2) {
            if(this.water < 350)  {
                console.log('Sorry, not enough water!');
            } else if (this.milk < 20) {
                console.log('Sorry, not enough milk!');
            } else if (this.beans < 20) {
                console.log('Sorry, not enough coffee beans!');
            } else if (this.cups < 1) {
                console.log('Sorry, not enough cup!');
            } else {
                console.log("I have enough resources, making you a coffee!");
                this.water -= 350;
                this.milk -= 75;
                this.beans -= 20;
                this.cups -= 1;
                this.money += 7;
            }
        } else if (inputTypeCoffeeInt === 3) {
            if(this.water < 200)  {
                console.log('Sorry, not enough water!');
            } else if (this.milk < 100) {
                console.log('Sorry, not enough milk!');
            } else if (this.beans < 12) {
                console.log('Sorry, not enough coffee beans!');
            } else if (this.cups < 1) {
                console.log('Sorry, not enough cup!');
            } else {
                console.log("I have enough resources, making you a coffee!");
                this.water -= 200;
                this.milk -= 100;
                this.beans -= 12;
                this.cups -= 1;
                this.money += 6;
            }
        }
        else {
            return '';
        }
    },
    take : function() {
        console.log(`I gave you $${this.money}`);
        return this.money = 0;
    }
};


let statut = 1;
while (statut === 1) {
    const actionStr = "Write action (buy, fill, take, remaining, exit):";
    let action = input(actionStr);

    if(action === "buy") {
        coffeeMachine.buy();
    } else if(action === "fill") {
        coffeeMachine.fill(this.water, this.milk, this.coffee, this.cups);
    } else if (action === "take") {
        coffeeMachine.take(this.money)
    } else if (action === "remaining") {
        Print();
    } else if (action === "exit"){
        statut = 0;
    } else {
        console.log('Choose valid option');
    }
}