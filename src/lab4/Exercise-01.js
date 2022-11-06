class RegularBulb {

    constructor() {
        this.year = 1;
    }
}
class EnergyBulb {
    constructor(color) {
        this.color = color;
        this.year = 10
    }
}

class Factory {
    createBulb(...args) {
        let bulb;
        if (args[0] === "regular") {
            bulb = new RegularBulb();
        } else if (args[0] === "energy") {
            bulb = new EnergyBulb(args[1]);
        }

        bulb.type = args[0];
        bulb.say = function() {
            console.log(this.type + ": rate " + this.year + "/year");
        }
        return bulb;
    }
}


const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}