export class Ability {
    private _name: string;
    private _cost: number;
    private _stat: Statistic | null;
    private _description: string;
    private _abilityActivation: ActivationType;
    private _supernatural: boolean;

    constructor(name: string, desc: string, abilityActivation: ActivationType, supernatural: boolean = false, cost: number = 0, stat: Statistic | null = null) {
        this._name = name;
        this._description = desc;
        this._abilityActivation = abilityActivation;
        this._cost = cost;
        this._stat = stat;
        
        
        this._supernatural = supernatural;
    }

    public get cost(): number {
        return this._cost;
    }


    public get name(): string {
        return this._name;
    }

    public get stat(): Statistic | null {
        return this._stat;
    }

    public get description(): string {
        return this._description;
    }

    public get abilityActivation(): string {
        return this._abilityActivation;
    }

    public get supernatural(): boolean {
        return this._supernatural;
    }

}

export enum ActivationType {
    EN = "ENABLER",
    ATI = "ACTION TO INITIATE",
    A = "ACTION",
    ATIOR = "ACTION TO INITIATE OR REINITIATE",
    SP = "SPECIAL"
}

export enum Statistic {
    Might,
    Speed,
    Intelligence
}
//I love you <3 mwah