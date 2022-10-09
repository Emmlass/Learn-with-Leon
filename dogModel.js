/*
From 
https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

Modeling a dog
Complete the following program to add the dog object definition.
*/

// TODO: create the dog object here

const dog = {
    name : "Fang",
    size : 75,
    
    
    bark() {
        return "Grrr! grrr!"
    }
}



console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);

console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
