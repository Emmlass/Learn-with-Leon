// from https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

/*
Modeling a Bank Account

Write a program that creates an account object with the following characteristics:

A name property set to "Alex".
A balance property set to 0.
A credit method adding the (positive or negative) value passed as an argument to the account balance.
A describe method returning the account description.
Use this object to show its description, crediting 250, debiting 80, then show its description again.


*/

const account = {
    name : "Alex",
    balance : 0,
    
    credit(){
        account.balance += 250;
        account.balance -= 80;
        return account.balance
    },
    
    describe(){
        return `owner: ${this.name}, balance:${this.balance}`
    },
    
   describe(){
        return `owner: ${this.name}, balance:${this.credit()}`
    }
    
    
    
    
};

console.log(account.describe())

