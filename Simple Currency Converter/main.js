const input = require('sync-input');

console.log('Welcome to Currency Converter!')


const typeStr = 'From:';
const toStr = 'To:'
const amountStr = 'Amount:'
const choiceStr = '1-Convert currencies 2-Exit program\n'
const arrayMoney = [
    new Money(0, 'USD',1),
    new Money(1, 'JPY',113.5),
    new Money(2, 'EUR',0.89),
    new Money(3, 'RUB',74.36),
    new Money(4, 'GBP',0.75)
];
let stateTypeInput = 0;
let stateToInput = 0;
let stateAmountInput = 0;
let stateAll = 0;


function Money(id, name, rate) {
    this.id = id;
    this.name = name;
    this.rate = rate;
}

let converter = {
    type: this.type,
    to: this.toInput,
    amount: this.amountInput,
    fstRate: this.fstRate,
    sndRate: this.sndRate ,
    typeInput: function() {
       let p = input(typeStr);

        for(let i = 0; i < arrayMoney.length; i++) {
            if (p.toUpperCase() === arrayMoney[i].name) {
                stateTypeInput = 1;
                this.type = p;
            }
        }
        if(stateTypeInput === 0) {
            console.log(`Unknown currency`);
        } else {
            this.type = p;
        }
    },
    toInput: function() {
        let p = input(toStr);

        for(let i = 0; i < arrayMoney.length; i++) {
            if (p.toUpperCase() === arrayMoney[i].name) {
                stateToInput = 1;
                this.to = p;
            }
        }


        if(stateToInput === 0) {
            console.log(`Unknown currency`);
        } else {
            this.to = p;
        }
    },
    amountInput: function() {
        let p = input(amountStr);
        const regEx = /[A-z]/;
        if (p.match(regEx)) {
            stateAmountInput = 0;
            console.log('The amount has to be a number.');
        } else if(p < 1) {
            stateAmountInput = 0;
            console.log(`The amount cannot be less than 1`);
        } else {
            stateAmountInput = 1;
            this.amount = parseFloat(p);
        }
    },

    choice: function () {
        let choice = input(choiceStr);
        if(choice == 2) {
            console.log('Have a nice day!');
            process.exit();
        } else if  (choice == 1) {
            console.log('What do you want to convert?');
        } else {
            console.log('Unknown input')
            converter.choice();
        }
    },
    print: function()  {
        arrayMoney.forEach((value) =>{
            console.log(`1 USD equals ${value.rate} ${value.name}`);
        });
    },

    findRate: function () {

        let o = this.type;
        let p = this.to;

        arrayMoney.forEach((money) => {
           if(o.toUpperCase() === money.name) {
               this.fstRate = money.rate;
           }
           if(p.toUpperCase() === money.name) {
               this.sndRate = money.rate;
           }
        });
    },
    convert: function () {

        if(this.type !== 'USD') {
            let p = this.amount / this.fstRate;
            let o = p * this.sndRate;
            console.log(`Result: ${this.amount} ${this.type.toUpperCase()} equals ${o.toFixed(4)} ${this.to.toUpperCase()}`);
        } else {
            let p = this.amount * this.sndRate;
            console.log((`Result: ${this.amount} ${this.type.toUpperCase()} equals ${p.toFixed(4)} ${this.to.toUpperCase()}`));
        }
    }
}

converter.print();
console.log('What do you want to do?');

converter.choice();

while(stateAll === 0) {

    if(stateTypeInput === 0) {
    converter.typeInput();
    } else if (stateToInput === 0) {
    converter.toInput();
    } else if (stateAmountInput === 0) {
    converter.amountInput();
    }

    if (stateTypeInput === 1 && stateToInput === 1 && stateAmountInput === 1) {
        converter.findRate();
        converter.convert();
        stateAll = 1;
    }
}