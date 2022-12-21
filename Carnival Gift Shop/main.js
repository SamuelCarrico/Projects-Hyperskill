
const input = require('sync-input');



let state = 1;
let tickets = 0;

let arrayGifts = [
    new Gift(1, 'Teddy Bear', 10),
    new Gift(2, 'Big Red Ball', 5),
    new Gift(3, 'Huge Bear', 50),
    new Gift(4, 'Candy', 8),
    new Gift(5, 'Stuffed Tiger', 15),
    new Gift(6, 'Stuffed Dragon', 30),
    new Gift(7, 'Skateboard', 100),
    new Gift(8, 'Toy Car', 25),
    new Gift(9, 'Basketball', 20),
    new Gift(10, 'Scary Mask', 75)
];

console.log('WELCOME TO THE CARNIVAL GIFT SHOP!');
console.log('Hello friend! Thank you for visiting the carnival!');
console.log('Here\'s the list of gifts:' + '\n');

arrayGifts.forEach((gift) => {console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);}
);
console.log(' ');

function Gift(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
}


let visitor = {
    ticket: tickets,
    ClaimGift: function() {

        if (arrayGifts.every((gift) => gift.id === undefined)) {
            console.log('Wow! There are no gifts to buy.\n');
        } else {
            let inputNumGift = parseInt(input('Enter the number of the gift you want to get:'));

            if (!arrayGifts.some((gift) => gift.id === inputNumGift) && (!arrayGifts.every((gift) => gift.id === undefined))) {
                console.log('There is no gift with that number!');
            }
            if (isNaN(inputNumGift)) {
                console.log('Please enter a valid number!\n');
            }
            if (arrayGifts.some((gift) => gift.id === inputNumGift)) {
                if (arrayGifts[inputNumGift - 1].price > this.ticket) {
                    console.log('You don\'t have enough tickets to buy this gift.');
                } else {
                    console.log(`Here you go, one ${arrayGifts[inputNumGift - 1].name}!`);
                    this.ticket -= arrayGifts[inputNumGift - 1].price;
                    arrayGifts.splice(inputNumGift - 1, 1, ' ');
                    console.log(`Total tickets: ${this.ticket}`);
                }
            }
        }
    },
    AddTickets: function() {
        let inputNumTickets = parseInt(input('Enter the ticket amount:'));
        if (isNaN(inputNumTickets) || inputNumTickets > 1000) {
            console.log('Please enter a valid number between 0 and 1000.\n');
        } else {
            this.ticket += inputNumTickets;
            console.log(`Total tickets: ${this.ticket}`);
        }
    },
    ShowTickets: function() {
        console.log(`Total tickets: ${this.ticket}`);
    },
    ShowPrices: function () {
        console.log('Here\'s the list of gifts:\n');
        if(arrayGifts.every((gift) => gift.id === undefined)) {
            console.log('Wow! There are no gifts to buy.');
        } else {
            for (let i = 0; i < arrayGifts.length; i++) {
                if (arrayGifts[i].id === undefined) {
                } else {
                    console.log(`${arrayGifts[i].id}- ${arrayGifts[i].name}, Cost: ${arrayGifts[i].price} tickets`)
                }
            }
        }
    },
    ShowChoices: function() {
        console.log(`\nWhat do you want to do?`);
        let inputChoices = parseInt(input(`1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop` + `\n`));
        switch (inputChoices) {
            case 1:
                this.ClaimGift();
                break;
            case 2:
                this.AddTickets();
                break;
            case 3:
                this.ShowTickets();
                break;
            case 4:
                this.ShowPrices();
                break;
            case 5:
                console.log('Have a nice day!');
                state = 0;
                break;
            default:
                console.log('Please enter a valid number!\n');
        }
    }
}

while(state === 1) {
    visitor.ShowChoices();
}