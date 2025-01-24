import { Ability } from './assets/classes/Ability';
import bookInfoJSON from './assets/jsons/info.json';
import { types } from './assets/constants/characterTypes';

interface CharacterDescriptor {
    name: string;
    description: string;
    skills: string[];
}

interface DescriptionJSON {
    [key : string] : CharacterDescriptor;
}

interface AbilityName {
    [key : string] : Ability;
}

const abilities : AbilityName = types.Occultist.abilities[1];
const descriptions : DescriptionJSON= bookInfoJSON;

export class Character {
    _name: string;
    _desc: CharacterDescriptor | null;
    _type: CharacterType;
    _focus: Focus;
    _tier: number;
    _effort: number;
    _xp: number;
    _might: Statistic;
    _speed: Statistic;
    _intelligence: Statistic;
    _abilities : Array<Ability>;

    constructor(name: string, description : string, type: CharacterType, focus: Focus, tier: number = 1, effort: number = 1, xp: number = 0) {
        this._name = name;
        this._desc = descriptions[description];
        this._type = type;
        this._focus = focus;
        this._tier = tier;
        this._effort = effort;
        this._xp = xp;
        this._might = new Statistic("Might");
        this._speed = new Statistic("Speed");
        this._intelligence = new Statistic("Intelligence");
        this._abilities = [];
    }

    toString() {
        return `My character is ${this._name}.  this.desc + this.type + this.focus`;
    }

    //Takes a PascalCase key of a character Descriptor name and assigns its info to this instance's desc variable
    setDescription(key : string) {
        this._desc = descriptions[key] || null;
    }

    get desc(){
        return this._desc;
    }

    public pushAbility(name : string) {
        this._abilities.push(abilities[name]);
    }
}

class Statistic {
    _name: string;
    _currentAmount: number;
    _pool: number;
    _edge: number;

    constructor(name: string) {
        this._name = name;
        this._currentAmount = 0;
        this._pool = 0;
        this._edge = 0;
    }


    public set currentAmount(v: number) {
        this._currentAmount = v;
    }

    public set pool(v: number) {
        this._pool = v;
    }

    public set edge(v: number) {
        this._edge = v;
    }

}

export enum CharacterType {
    Investigator = "Investigator",
    Protector = "Protector",
    Elocutionist = "Elocutionist",
    Occultist = "Occultist"
}

export enum Focus {
    FightsDirty = "Fights Dirty",
    WouldRatherBeReading = "Would Rather Be Reading"
}

