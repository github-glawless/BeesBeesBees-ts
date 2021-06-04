class Grub {
    age : number;
    color : string;
    food : string;
    constructor() {
        this.age = 0;
        this.color = `pink`;
        this.food = `jelly`;
    }
    eat(): string {
        return `Mmmmmmmmm ` + this.food;
}

};


let grub = new Grub();
console.log(grub.eat());
