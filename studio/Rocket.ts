import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Payload[] = [];
    astronauts: Payload[] = [];
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass (items: Payload []): number {
        let mass: number = 0;
        for (let i = 0; i < items.length; i++) {
            mass = mass + items[i].massKg;
        }
        return mass;
    }
    currentMassKg (): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd (item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo (cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut (astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true; 
        } else {
            return false;
        }
    }
}