// A model in TypeScript is a structure that defines the shape of data, usually using a class or interface.
// A constructor is a function inside a class that runs when you create a new object to set up its properties.

export class WishItem {
    constructor(public wishText : string, public isComplete : boolean = false){

    }
}