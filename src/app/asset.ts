export class Asset<T> {
    key: T;
    shortName: T | string;
    imagePath: string;
    _tooltipText: string;

    enabledForSuggesting: boolean;
    selectable: boolean;

    constructor(key: T, imagePath = '', tooltipText = '', shortName = '') {
        this.key = key;
        this.imagePath = imagePath;
        this._tooltipText = tooltipText;

        this.shortName = shortName === '' ? key : shortName;

        this.enabledForSuggesting = true;
        this.selectable = true;
    }

    get name(): any {
        return this.key;
    }

    get tooltipText() {
        return this._tooltipText;
    }
}

export class PactCondition extends Asset<string> {
    rankCosts: number[];
    rankSelected: number;

    constructor(name: string, rankCosts: number[], tooltipText = '') {
        super(name, '', tooltipText);
        this.rankCosts = rankCosts;

        this.rankSelected = 0;
    }

    get name() {
        return `${this.key} (${this.rankSelected}x)`;
    }
}

export class MirrorPerk extends Asset<Array<string>> {
    private _tooltips: Array<string>;

    private _selectedIndex = 0;

    constructor(nameOption1: string, nameOption2: string, tooltipText1 = '', tooltipText2 = '') {
        super([nameOption1, nameOption2]);

        this._tooltips = [tooltipText1, tooltipText2];
        this.shortName = `${nameOption1}/${nameOption2}` 
    }

    pickRandomPerk() {
        this._selectedIndex = Math.floor(Math.random() * 2);
    }

    get name() {
        return this.key[this._selectedIndex];
    }

    get tooltipText() {
        return this._tooltips[this._selectedIndex];
    }
}