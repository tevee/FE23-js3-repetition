let anonymFunc = () => {
    console.log('Detta är en anonym/arrow funktion');
}
anonymFunc();

// Object
// const spargris = {
//     balance: 0,
//     deposit(amount) {
//         this.balance += amount;
//     },
//     withdraw(amount) {
//         if(this.balance >= amount && this.balance > 0) this.balance -= amount;
//         else console.log("You cannot withdraw more than your balance!");
//     },
//     checkBalance() {
//         console.log(this.balance);
//     }
// }

// spargris.checkBalance();
// spargris.withdraw(100);
// spargris.deposit(4000);
// spargris.checkBalance();
// spargris.withdraw(2000);
// spargris.checkBalance();

// Class
class Spargris {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.name}, your balance is now: ${this.balance}`);
        return amount;
    }

    withdraw(amount) {
        if(this.balance >= amount && this.balance > 0) {
            this.balance -= amount;
            console.log(`${this.name}, your balance is now: ${this.balance}`);
            return amount;
        }
        else {
            console.log("You cannot withdraw more than your balance!");
            return 0;
        }
    }

    checkBalance() {
        console.log(`${this.name} balance: ${this.balance}`);
    }
}

const anders = new Spargris('Anders', 0);
const lotta = new Spargris('Lotta', 0);
console.log(anders, lotta);

anders.deposit(5000)
lotta.deposit(10000)

console.log(anders, lotta);

// Callbacks
setInterval(() => lotta.deposit(10), 10000)

// Promise
function stealMoneyFromLotta() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stolenMoney = lotta.withdraw(10);
            if(stolenMoney > 0 && typeof stolenMoney == "number") {
                resolve(stolenMoney);
            }
            else reject("Operation failed!");
        }, 30000);
    })
}

async function depositStolenMoneyFromLotta(bankaccount) {
    const stolenMoneyFromLotta = await stealMoneyFromLotta();
    bankaccount.deposit(stolenMoneyFromLotta)
    anders.checkBalance()
    lotta.checkBalance()
}

depositStolenMoneyFromLotta(anders)