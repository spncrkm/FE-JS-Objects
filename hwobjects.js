
// 1. Exploring JavaScript Objects

//Task 1

// let book = {
//     title: 'IT',
//     author: 'Stephen King',
//     pages: 300
// }

//Task 2 & 3

class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
    displayBook = () => {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
    };
};

const book = new Book('IT', 'Stephen King', 300)
book.displayBook();

// 2. Exploring Objects and Math in JavaScript

// let account = {
//     accountNum:  234516789,
//     balance: 0,
//     owner: "Spencer"
// }

class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    }

    userDeposit = (deposit) => {
        
        console.log(`You are depositing $${deposit}`);
        console.log(`Your new balance is: ${this.balance += deposit}.`);
    }

    userWithdraw = (withdraw) => {
        console.log(`You are withdrawing ${withdraw}`)
    }

    interestRate = (year, rate) => {
        return this.balance * (1 + 1 * rate)**year
        
    }
}

const accountUser = new Account(234516789, 0, "Spencer");
accountUser.userDeposit(50);
accountUser.userWithdraw(30);

console.log(accountUser.interestRate(3, .05));


